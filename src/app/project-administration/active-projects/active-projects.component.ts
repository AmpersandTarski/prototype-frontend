import { Component, OnInit } from '@angular/core';
import { testdata } from './testdata';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css'],
})
export class ActiveProjectsComponent implements OnInit {
  constructor() {}

  activeProjects = testdata;

  ngOnInit(): void {}
}
