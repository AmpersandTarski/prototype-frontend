import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectInterface } from './project.interface';
import { testdata } from './testdata';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public projectId?: string | null;
  public project: ProjectInterface | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');

      if (this.projectId === null) {
        this.project = testdata[0];
      } else {
        this.project = testdata.find((object) => object._id_ === this.projectId) ?? null;
      }
    });
  }
}
