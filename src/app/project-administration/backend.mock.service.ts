import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBackendService } from './backend.service.interface';
import { PersonInterface } from './person/person.interface';
import { testdata as ACTIVE_PROJECTS_TEST_DATA } from './active-projects/testdata';
import { testdata as INACTIVE_PROJECTS_TEST_DATA } from './inactive-projects/testdata';
import { testdata as PROJECT_TEST_DATA } from './project/testdata';
import { testdata as PERSON_TEST_DATA } from './person/testdata';
import { ProjectInterface } from './project/project.interface';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { InactiveProjectsInterface } from './inactive-projects/inactive-projects.interface';

@Injectable()
export class BackendMockService implements IBackendService {
  getActiveProjects(): Observable<ActiveProjectsInterface> {
    return of(ACTIVE_PROJECTS_TEST_DATA);
  }

  getInactiveProjects(): Observable<InactiveProjectsInterface> {
    return of(INACTIVE_PROJECTS_TEST_DATA);
  }

  getProject(id: string): Observable<ProjectInterface | undefined> {
    return of(PROJECT_TEST_DATA.find((object) => object._id_ === id));
  }

  getPerson(id: string): Observable<PersonInterface | undefined> {
    return of(PERSON_TEST_DATA.find((object) => object._id_ === id));
  }
}
