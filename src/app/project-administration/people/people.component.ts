import { Component } from '@angular/core';
import { testdata } from './testdata';

@Component({
  selector: 'app-persons',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  data = testdata;

  constructor() {}
}
