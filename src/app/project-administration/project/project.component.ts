import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BackendService } from '../backend.service';
import { ProjectInterface } from './project.interface';
import { testdata } from './testdata';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public projectId: string | null = null;
  public data$: Observable<ProjectInterface> = this.route.paramMap.pipe(
    switchMap((params) => {
      let id = params.get('id');
      if (id === null) {
        throw new Error();
      }
      return this.backend.getProject(id);
    }),
  );

  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');
    });
  }
}
