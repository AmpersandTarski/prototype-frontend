import { Component, Input } from '@angular/core';
import { AmpersandInterface } from '../interfacing/ampersand-interface.class';
import { ObjectBase } from '../objectBase.interface';

@Component({
  template: '',
})
export abstract class BaseBoxComponent<I> {
  @Input() interfaceComponent!: AmpersandInterface<I>;

  @Input() crud: string = 'cRud';

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

  public deleteItem(resource: ObjectBase): void {
    this.interfaceComponent.delete(resource).subscribe((x) => {
      if (x.isCommitted) {
        // TODO
      }
    });
  }
}
