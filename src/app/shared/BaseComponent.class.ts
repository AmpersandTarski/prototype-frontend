import { Component, Input, OnInit } from '@angular/core';
@Component({
  template: ''
})
export abstract class BaseComponent implements OnInit {
  public canCreate: boolean = false;
  public canRead: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public exprIsUni: boolean = false;
  public exprIsTot: boolean = false;

  @Input('isUni') isUni: any;
  @Input('isTot') isTot: any;
  @Input('crud') crud: string = "crud";

  ngOnInit(): void {
    this.crudTextSepperator(this.crud);
    this.exprIsUni = this.isUni !== undefined;
    this.exprIsTot = this.isTot !== undefined;
  }

  public crudTextSepperator(crud: string) {
    var c = crud[0];
    var r = crud[1];
    var u = crud[2];
    var d = crud[3];
    
    if(c == c.toUpperCase()) {
      this.canCreate = true;
    } 
    if(r == r.toUpperCase()) {
      this.canRead = true;
    } 
    if(u == u.toUpperCase()) {
      this.canUpdate = true;
    } 
    if(d == d.toUpperCase()) {
      this.canDelete = true;
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

