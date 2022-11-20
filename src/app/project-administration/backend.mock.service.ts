import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { testdata } from './active-projects/testdata';
import { IBackendService } from './backend.service.interface';

@Injectable()
export class BackendMockService implements IBackendService {
  getActiveProjects(): Observable<ActiveProjectsInterface[]> {
    return of(testdata);
  }
}
