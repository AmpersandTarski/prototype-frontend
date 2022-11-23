import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { ActiveProjectsInterface } from './active-projects.interface';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css'],
})
export class ActiveProjectsComponent implements OnInit {
  data$!: Observable<ActiveProjectsInterface[]>;

  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.data$ = this.service.getActiveProjects()
  }
}
