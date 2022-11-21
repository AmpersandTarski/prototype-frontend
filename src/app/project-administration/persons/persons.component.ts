import { Component, OnInit } from '@angular/core';
import { PersonInterface } from '../person/person.interface';
import { testdata } from './testdata';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  data: Array<PersonInterface> = testdata;

  constructor() { }

  ngOnInit(): void {
  }

}
