import { Component, OnInit } from '@angular/core';
import { ActiveProjectInterface } from './active-project.interface';
import { testdata } from './testdata';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css'],
})
export class ActiveProjectsComponent implements OnInit {
  activeProjects: Array<ActiveProjectInterface> = testdata;

  constructor() { }

  ngOnInit(): void { }
}
