import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AmpersandInterface } from '../interfacing/ampersand-interface.class';
import { ObjectBase } from '../objectBase.interface';
@Component({
  template: '',
})
export abstract class BaseAtomicComponent<T, I> implements OnInit {
  @Input() property: T | Array<T> | null = null;

  @Input() resource!: ObjectBase;

  @Input() propertyName!: string;

  // We require a AmpersandInterface reference that implements the required methods (like patch)
  // Most likely this is a top-level component for a specific application interface (e.g. ProjectComponent)
  @Input() interfaceComponent!: AmpersandInterface<I>;

  public newItemControl!: FormControl<string | boolean | number | ObjectBase>;

  public data: Array<T> = [];

  private _isUni: boolean = false;
  @Input()
  set isUni(attribute: boolean | '') {
    this._isUni = attribute === '' || attribute;
  }
  get isUni(): boolean {
    return this._isUni;
  }

  private _isTot: boolean = false;
  @Input()
  set isTot(attribute: boolean | '') {
    this._isTot = attribute === '' || attribute;
  }
  get isTot(): boolean {
    return this._isTot;
  }

  @Input() crud: string = 'cRud';

  constructor() {}

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

  ngOnInit(): void {
    this.data = this.requireArray(this.property);
  }

  public requireArray(property: T | Array<T> | null) {
    if (Array.isArray(property)) {
      return property;
    } else if (property === null) {
      return [];
    } else {
      return [property];
    }
  }

  public addItem() {
    // TODO: show warning message when item already exists?
    // if (this.data.some((x: T) => x == (this.newItemControl.value as unknown))) {
    //   // the warning message
    // }

    let val: T = this.newItemControl.value as unknown as T;

    this.interfaceComponent
      .patch(this.resource._path_, [
        {
          op: 'add',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: val,
        },
      ])
      .subscribe((x) => {
        if (x.isCommitted && x.invariantRulesHold) {
          if (this.isUni) {
            this.newItemControl.disable();
          }
          this.data.push(val);
          this.newItemControl.setValue('');
        }
      });
  }

  // remove for not univalent atomic-components
  public removeItem(index: number) {
    this.interfaceComponent
      .patch(this.resource._path_, [
        {
          op: 'remove',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: this.data[index],
        },
      ])
      .subscribe((x) => {
        if (x.isCommitted && x.invariantRulesHold) {
          this.data.splice(index, 1);
        }
      });
  }

  public isNewItemInputRequired() {
    return this.isTot && this.data.length === 0;
  }
}
