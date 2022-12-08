import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnInit, OnChanges {
  public canCreate: boolean = true;
  public canRead: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public exprIsUni: boolean = false;
  public exprIsTot: boolean = false;

  @Input() isUni: boolean | string = false;
  @Input() isTot: boolean | string = false;
  @Input() crud: string = 'crud';

  @Output() propertyEvent = new EventEmitter<string | Array<string>>();

  ngOnInit(): void {
    this.setCRUDPermissions(this.crud);
    this.exprIsUni = this.isUni == '';
    this.exprIsTot = this.isTot == '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('isUni')) {
      this.exprIsUni = changes['isUni'].firstChange;
    }

    this.setCRUDPermissions(changes['crud'].currentValue);
  }

  public changeProperty(property: any) {
    this.propertyEvent.emit(property);
  }

  private setCRUDPermissions(crud: string) {
    let c = crud[0];
    let r = crud[1];
    let u = crud[2];
    let d = crud[3];

    this.canCreate = c == c.toUpperCase();
    this.canRead = r == r.toUpperCase();
    this.canUpdate = u == u.toUpperCase();
    this.canDelete = d == d.toUpperCase();
  }

  public requireArray(property: any) {
    if (Array.isArray(property)) {
      return property;
    } else if (property === null) {
      return [];
    } else {
      return [property];
    }
  }
}
