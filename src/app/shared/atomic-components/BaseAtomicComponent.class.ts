import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AmpersandInterface } from '../interfacing/ampersand-interface.class';
import { ObjectBase } from '../objectBase.interface';
@Component({
  template: '',
})
export abstract class BaseAtomicComponent<T, I> implements OnInit {
  // TODO Refactor to combination of parent-propertyName. We need a link to the parent anyway
  @Input() property: T | Array<T> | null = null;

  // The type of the T for Resource<T> is not relevant nor to be determined here; therefore unknown
  // We require a Resource, that implements the required methods (like patch)
  // Most likely this is a top-level component for a specific application interface (e.g. ProjectComponent)
  @Input() resource!: Resource<unknown>;

  @Input() interfaceComponent!: AmpersandInterface<I>;

  public newItemControl!: FormControl<string | boolean | ObjectBase>;

  @Input() propertyName!: string;

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

  public canCreate(): boolean {
    return this.crud.includes('C');
  }
  public canRead(): boolean {
    return this.crud.includes('R');
  }
  public canUpdate(): boolean {
    return this.crud.includes('U');
  }
  public canDelete(): boolean {
    return this.crud.includes('D');
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

  public addItem(formatValue?: (x: T) => string) {
    // TODO: show warning message when item already exists?
    // if (this.data.some((x: T) => x == (this.newItemControl.value as unknown))) {
    //   // the warning message
    // }

    let val: T = this.newItemControl.value as unknown as T;
    if (typeof formatValue != 'undefined') {
      val = formatValue(val) as unknown as T;
    }

    this.interfaceComponent
      .patch([
        {
          op: 'add',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: val,
        },
      ])
      .subscribe();
    this.data.push(val);
    this.newItemControl.setValue('');
  }

  // remove for not univalent atomic-components
  public removeItem(index: number) {
    this.interfaceComponent
      .patch([
        {
          op: 'remove',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: this.data[index],
        },
      ])
      .subscribe((x) => {
        if (x.isCommitted && x.invariantRulesHold) {
          // TODO: show warning message
          this.data.splice(index, 1);
        }
      });
  }

  public deleteItem(index: number) {
    // TODO: show warning message
    if (this.isTot && this.data.length == 1) {
      throw new Error('Must have at least one element');
    }
    // TODO: resource delete method
  }

  public isNewItemInputRequired() {
    return this.isTot && this.data.length === 0;
  }
}
