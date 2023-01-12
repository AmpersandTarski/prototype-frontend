import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Resource } from '../interfacing/resource.interface';
import { AtomicComponentType } from '../models/atomic-component-types';
import { ObjectBase } from '../objectBase.interface';
@Component({
  template: '',
})
export abstract class BaseAtomicComponent<T> implements OnInit, OnChanges {
  // TODO Refactor to combination of parent-propertyName. We need a link to the parent anyway
  @Input() property: T | Array<T> | null = null;

  // The type of the T for Resource<T> is not relevant nor to be determined here; therefore unknown
  // We require a Resource, that implements the required methods (like patch)
  // Most likely this is a top-level component for a specific application interface (e.g. ProjectComponent)
  @Input() resource!: Resource<unknown>;

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

  // only used for the tools
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('isUni')) {
      this.isUni = changes['isUni'].firstChange;
    }
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

  public initNewItemControl(type: AtomicComponentType) {
    if (
      type == AtomicComponentType.Alphanumeric ||
      type == AtomicComponentType.BigAlphanumeric ||
      type == AtomicComponentType.Date
    ) {
      this.newItemControl = new FormControl<string>('', { nonNullable: true, updateOn: 'change' });
    }

    if (type == AtomicComponentType.Object) {
      this.newItemControl = new FormControl<ObjectBase>({} as ObjectBase, { nonNullable: true, updateOn: 'change' });
    }

    if (type == AtomicComponentType.Boolean) {
      this.newItemControl = new FormControl<boolean>(false, { nonNullable: true, updateOn: 'blur' });
    }
  }

  public addItem(formatValue?: (x: T) => string) {
    if (this.isUni) {
      return;
    }

    // TODO: show warning message?
    if (this.data.some((x: T) => x == (this.newItemControl.value as unknown))) {
      throw new Error('Value already exists');
    }

    let val: T = this.newItemControl.value as unknown as T;
    if (typeof formatValue != 'undefined') {
      val = formatValue(val) as unknown as T;
    }

    this.resource
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

  public removeItem(index: number) {
    if (this.isUni) {
      return;
    }

    // TODO: show warning message?
    if (this.isTot && this.data.length == 1) {
      throw new Error('Must have at least one element');
    }
    this.resource
      .patch([
        {
          op: 'remove',
          path: this.propertyName, // FIXME: this must be relative to path of this.resource
          value: this.data[index],
        },
      ])
      .subscribe();
    this.data.splice(index, 1);
  }

  public deleteItem(index: number) {
    if (this.isUni) {
      return;
    }
    // TODO: show warning message?
    if (this.isTot && this.data.length == 1) {
      throw new Error('Must have at least one element');
    }
    // TODO: resource delete method
  }

  public isNewItemInputRequired() {
    return this.isTot && this.data.length === 0;
  }
}
