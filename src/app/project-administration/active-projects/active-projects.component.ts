import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css'],
})
export class ActiveProjectsComponent {
  data = this.service.getActiveProjects();

  constructor(private service: BackendService) {}
}
