import { Component, OnInit } from '@angular/core';
import { testdata } from './testdata';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  data = testdata;

  constructor() { }

  ngOnInit(): void {
  }

}
