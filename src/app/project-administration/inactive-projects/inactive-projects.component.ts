import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { InactiveProjectsInterface } from './inactive-projects.interface';

@Component({
  selector: 'app-inactive-projects',
  templateUrl: './inactive-projects.component.html',
  styleUrls: ['./inactive-projects.component.css'],
})
export class InactiveProjectsComponent implements OnInit {
  data$!: Observable<InactiveProjectsInterface[]>;

  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.service.getInactiveProjects();
  }
}
