import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BackendService } from '../backend.service';
import { ProjectInterface } from '../project/project.interface';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
})
export class ProjectEditComponent implements OnInit {
  public data$!: Observable<ProjectInterface>;
  public projectId!: string;

  constructor(private route: ActivatedRoute, private service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.projectId = params.get('id')!;
        if (this.projectId === null) {
          throw new Error('id does not exist');
        }
        return this.service.getProject(this.projectId);
      }),
    );
  }

  patchProject(property: any, path: string) {
    let body = [
      {
        op: 'replace',
        path: path,
        value: property,
      },
    ];

    this.service.patchProject(this.projectId, body).subscribe(() => {
      this.data$ = this.service.getProject(this.projectId);
    });
  }
}
