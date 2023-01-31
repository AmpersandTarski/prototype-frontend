import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { BackendService } from '../backend.service';
import { ActiveProjectsInterface } from './active-projects.interface';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.css'],
})
export class ActiveProjectsComponent extends AmpersandInterface<ActiveProjectsInterface> implements OnInit {
  data$!: Observable<ActiveProjectsInterface[]>;

  constructor(private service: BackendService) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.service.getActiveProjects();
  }
}
