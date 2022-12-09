import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsInterface } from '../projects.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-inactive-projects',
  templateUrl: './inactive-projects.component.html',
  styleUrls: ['./inactive-projects.component.css'],
})
export class InactiveProjectsComponent implements OnInit {
  data$!: Observable<ProjectsInterface[]>;

  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.service.getInactiveProjects();
  }
}
