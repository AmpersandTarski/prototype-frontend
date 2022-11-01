import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atomic-alphanumeric',
  templateUrl: './atomic-alphanumeric.component.html',
  styleUrls: ['./atomic-alphanumeric.component.css']
})
export class AtomicALPHANUMERICComponent implements OnInit {
  public crudC: boolean;
  public crudR: boolean;
  public crudU: boolean;
  public crudD: boolean;
  public exprIsUni: boolean;
  public exprIsTot: boolean;

  @Input() property!: string | Array<string>;

  constructor() {
    this.crudC = false;
    this.crudR = false;
    this.crudU = false;
    this.crudD = false;
    this.exprIsUni = false;
    this.exprIsTot = false;
  }

  ngOnInit(): void {
  }

}
