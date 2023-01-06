import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { from, Observable, switchMap, tap } from 'rxjs';
import { Patch } from 'src/app/shared/interfacing/patch';
import { PatchResponse } from 'src/app/shared/interfacing/patch-response.interface';
import { Resource } from 'src/app/shared/interfacing/resource.interface';
import { BackendService } from '../backend.service';
import { ProjectInterface } from '../project/project.interface';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
})
export class ProjectEditComponent implements OnInit, Resource<ProjectInterface> {
  public data$!: Observable<ProjectInterface>;
  public projectId!: string;
  constructor(private route: ActivatedRoute, public service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.projectId = params.get('id')!;
        if (this.projectId === null) {
          throw new Error('id does not exist');
        }
        return this.service.getProjectEdit(this.projectId);
      }),
    );
  }

  patch(patches: Patch[]): Observable<PatchResponse<ProjectInterface>> {
    return this.service.patchProject(this.projectId, patches).pipe(
      tap((x) => {
        if (x.isCommitted) {
          this.data$ = from([x.content]);
        }
      }),
    );
  }
}
