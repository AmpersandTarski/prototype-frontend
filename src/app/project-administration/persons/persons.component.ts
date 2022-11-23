import { Component } from '@angular/core';
import { testdata } from './testdata';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent {
  data = testdata;

  constructor() {}
}
