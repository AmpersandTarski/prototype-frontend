import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BackendService } from '../backend.service';
import { ProjectInterface } from './project.interface';
import { Router, Navigation } from '@angular/router';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent extends AmpersandInterface<ProjectInterface> implements OnInit {
  public projectId?: string;

  constructor(
    private route: ActivatedRoute,
    protected service: BackendService,
    private router: Router,
    http: HttpClient,
  ) {
    super(http);
  }

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.projectId = params.get('id')!;
        if (this.projectId === null) {
          this.router.navigate(['/404'], { skipLocationChange: true });
        }
        return this.service.getProject(this.projectId);
      }),
    );
  }
}
