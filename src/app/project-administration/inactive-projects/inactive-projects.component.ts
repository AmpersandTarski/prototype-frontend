import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { BackendService } from '../backend.service';
import { InactiveProjectsInterface } from './inactive-projects.interface';

@Component({
  selector: 'app-inactive-projects',
  templateUrl: './inactive-projects.component.html',
  styleUrls: ['./inactive-projects.component.css'],
})
export class InactiveProjectsComponent extends AmpersandInterface<InactiveProjectsInterface> implements OnInit {
  data$!: Observable<InactiveProjectsInterface[]>;

  constructor(private service: BackendService) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.service.getInactiveProjects();
  }
}
