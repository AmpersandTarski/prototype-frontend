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
    // TODO: show warning message when item already exists?
    // if (this.data.some((x: T) => x == (this.newItemControl.value as unknown))) {
    //   // the warning message
    // }

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

  // remove for not univalent atomic-components
  public removeItem(index: number) {
    this.resource
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

  public isNewItemInputRequired() {
    return this.isTot && this.data.length === 0;
  }
}
