import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Resource } from '../interfacing/resource.interface';
import { AtomicComponentType } from '../models/atomic-component-types';
import { ObjectBase } from '../objectBase.interface';
@Component({
  template: '',
})
export abstract class BaseAtomicComponent<T> implements OnInit, OnChanges {
  @Input()
  // TODO Refactor to combination of parent-propertyName. We need a link to the parent anyway
  property: T | Array<T> | null = null;

  @Input()
  // The type of the T for Resource<T> is not relevant nor to be determined here; therefore unknown
  // We require a Resource, that implements the required methods (like patch)
  // Most likely this is a top-level component for a specific application interface (e.g. ProjectComponent)
  resource!: Resource<unknown>;

  public newItemControl!: FormControl<string | boolean | ObjectBase>;

  @Input()
  propertyName!: string;

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

  @Input()
  crud: string = 'cRud';

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

  public isNewItemInputRequired() {
    return this.isTot && this.data.length === 0;
  }
}
