import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnInit, OnChanges {
  public canCreate: boolean = false;
  public canRead: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public exprIsUni: boolean = false;
  public exprIsTot: boolean = false;

  @Input() isUni: boolean | string | undefined;
  @Input() isTot: boolean | string | undefined;
  @Input() crud: string = 'crud';

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

  public crudTextSepperator(crud: string) {
    var c = crud[0];
    var r = crud[1];
    var u = crud[2];
    var d = crud[3];

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
