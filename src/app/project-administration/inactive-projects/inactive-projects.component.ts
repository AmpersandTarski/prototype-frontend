import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { BackendService } from '../backend.service';
import { InactiveProjectsInterface } from './inactive-projects.interface';

@Component({
  selector: 'app-inactive-projects',
  templateUrl: './inactive-projects.component.html',
  styleUrls: ['./inactive-projects.component.css'],
})
export class InactiveProjectsComponent extends AmpersandInterface<InactiveProjectsInterface> implements OnInit {
  constructor(protected service: BackendService, http: HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.data$ = this.service.getInactiveProjects();
  }
}
