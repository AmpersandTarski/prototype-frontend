import { Component, Input, OnInit } from '@angular/core';
@Component({
  template: ''
})
export abstract class BaseComponent implements OnInit {
  public crudC: boolean = false;
  public crudR: boolean = true;
  public crudU: boolean = false;
  public crudD: boolean = false;
  public exprIsUni: boolean = false;
  public exprIsTot: boolean = false;

  @Input('isUni') isUni: any;
  ngOnInit(): void {
    this.exprIsUni = this.isUni !== undefined;
    console.log(`Boolean isUni is ${this.exprIsUni ? '' : 'non-'}present!`);
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

