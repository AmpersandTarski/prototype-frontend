import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnInit, OnChanges {
  public canCreate: boolean = false;
  public canRead: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public exprIsUni: boolean = false;
  public exprIsTot: boolean = false;

  @Input('isUni') isUni: boolean | string | undefined;
  @Input('isTot') isTot: boolean | string | undefined;
  @Input('crud') crud: string = "crud";

  ngOnInit(): void {
    this.crudTextSepperator(this.crud);
    this.exprIsUni = this.isUni !== undefined;
    this.exprIsTot = this.isTot !== undefined;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('isUni')) {
      this.exprIsUni = changes['isUni'].firstChange;
    }

    this.crudTextSepperator(changes['crud'].currentValue);
  }

  public whatIsHappening() {
    console.log(this.exprIsUni);
    console.log(this.isUni);
  }

  public crudTextSepperator(crud: string) {
    var c = crud[0];
    var r = crud[1];
    var u = crud[2];
    var d = crud[3];

    if (c == c.toUpperCase()) {
      this.canCreate = true;
    } else {
      this.canCreate = false
    }

    if (r == r.toUpperCase()) {
      this.canRead = true;
    } else {
      this.canRead = false
    }

    if (u == u.toUpperCase()) {
      this.canUpdate = true;
    } else {
      this.canUpdate = false
    }

    if (d == d.toUpperCase()) {
      this.canDelete = true;
    } else {
      this.canDelete = false
    }
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

