import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseAtomicComponent<T> implements OnInit, OnChanges {
  @Input()
  property: T | Array<T> | null = null;
  
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
}
