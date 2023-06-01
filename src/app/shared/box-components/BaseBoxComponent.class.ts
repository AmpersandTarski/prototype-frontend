import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, tap } from 'rxjs';
import { AmpersandInterface } from '../interfacing/ampersand-interface.class';
import { ObjectBase } from '../objectBase.interface';

@Component({
  template: '',
})
export abstract class BaseBoxComponent<TItem extends ObjectBase, I> implements OnInit {
  @Input() resource!: ObjectBase;
  @Input() propertyName!: string;
  @Input() data!: TItem[];
  @Input() interfaceComponent!: AmpersandInterface<I>;
  @Input() crud: string = 'cRud';
  @Input() getPath!: string;
  @Input() placeholder: string = '';
  dropdownMenuObjects$: Observable<Array<ObjectBase>> = of();
  newItemControl!: FormControl<string | boolean | number | ObjectBase>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.canUpdate()) {
      this.newItemControl = new FormControl<ObjectBase>({} as ObjectBase, { nonNullable: true, updateOn: 'change' });
      this.dropdownMenuObjects$ = this.getDropdownMenuItems(this.getPath);
    }
  }

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

  public addItem() {
    let val = this.newItemControl.value as ObjectBase;

    this.interfaceComponent
      .patch(this.resource._path_, [
        {
          op: 'add',
          path: this.propertyName,
          value: val._id_,
        },
      ])
      .subscribe((x) => {
        if (x.isCommitted && x.invariantRulesHold) {
          // TODO: fix ugly any type
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.data = (x.content as any)[this.propertyName] as TItem[];

          // remove the recently added item from the dropdown menu
          this.dropdownMenuObjects$ = this.dropdownMenuObjects$.pipe(
            tap((objects) =>
              objects.forEach((item, index) => {
                if (item._id_ === val._id_) {
                  objects.splice(index, 1);
                }
              }),
            ),
          );
          this.newItemControl.setValue({} as ObjectBase);
        }
      });
  }

  public removeItem(index: number): void {
    this.interfaceComponent
      .patch(this.resource._path_, [
        {
          op: 'remove',
          path: `${this.propertyName}/${this.data[index]._id_}`,
        },
      ])
      .subscribe((x) => {
        if (x.isCommitted && x.invariantRulesHold) {
          // TODO: fix ugly any type
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.data = (x.content as any)[this.propertyName] as TItem[];

          this.dropdownMenuObjects$ = this.getDropdownMenuItems(this.getPath);
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

  private getDropdownMenuItems(path: string): Observable<Array<ObjectBase>> {
    let objects: Observable<Array<ObjectBase>> = this.interfaceComponent.fetchDropdownMenuData(path);
    objects = objects.pipe(
      map((dropdownobjects) => dropdownobjects.filter((object) => !this.data.map((y) => y._id_).includes(object._id_))),
    );
    return objects;
  }
}
