import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { Observable, switchMap, tap } from 'rxjs';
import { BackendService } from '../backend.service';
import { ProjectEditInterface } from './project-edit.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
})
export class ProjectEditComponent extends AmpersandInterface<ProjectEditInterface> implements OnInit {
  public projectId!: string;

  constructor(private route: ActivatedRoute, protected service: BackendService, http: HttpClient) {
    super(http);
  }

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
}
