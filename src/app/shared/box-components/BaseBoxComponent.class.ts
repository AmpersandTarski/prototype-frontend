import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AmpersandInterface } from '../interfacing/ampersand-interface.class';
import { ObjectBase } from '../objectBase.interface';

@Component({
  template: '',
})
export abstract class BaseBoxComponent<TItem extends ObjectBase, I> {
  @Input() resource!: ObjectBase;
  @Input() propertyName!: string;
  @Input() data!: TItem[];
  @Input() interfaceComponent!: AmpersandInterface<I>;
  @Input() crud: string = 'cRud';

  constructor(private http: HttpClient) {}

  public canCreate(): boolean {
    return this.crud[0] == 'C';
  }
  public canRead(): boolean {
    return this.crud[1] == 'R';
  }
  public canUpdate(): boolean {
    return this.crud[2] == 'U';
  }
  public canDelete(): boolean {
    return this.crud[3] == 'D';
  }

  public createItem(): void {
    const path: string = `${this.resource._path_}/${this.propertyName}`;
    this.interfaceComponent.post(path).subscribe((x) => {
      if (x.isCommitted && x.invariantRulesHold) {
        this.data.unshift(x.content as TItem);
      }
    });
  }

  public removeItem(index: number): void {
    const str: string = this.data[index]._path_;

    // finds the index to be split by finding the correct "/"
    const lastIndex = str.lastIndexOf('/');
    const formattedStr = str.substring(0, lastIndex);
    const splitIndex = formattedStr.lastIndexOf('/');

    const resourcePath = str.substring(0, splitIndex);
    const itemPath = str.substring(splitIndex);

    this.interfaceComponent
      .patch(resourcePath, [
        {
          op: 'remove',
          path: itemPath, // TODO: see atomic-object's way
        },
      ])
      .subscribe((x) => {
        if (x.isCommitted && x.invariantRulesHold) {
          this.data.splice(index, 1);
        }
      });
  }

  public deleteItem(index: number): void {
    this.interfaceComponent.delete(this.data[index]._path_).subscribe((x) => {
      if (x.isCommitted && x.invariantRulesHold) {
        this.data.splice(index, 1);
      }
    });
  }
}
