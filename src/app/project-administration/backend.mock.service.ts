import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBackendService } from './backend.service.interface';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { PersonInterface } from './person/person.interface';
import { testdata as ACTIVE_PROJECTS_TEST_DATA } from './active-projects/testdata';
import { testdata as PERSON_TEST_DATA } from './person/testdata';

@Injectable()
export class BackendMockService implements IBackendService {
  getActiveProjects(): Observable<ActiveProjectsInterface[]> {
    return of(ACTIVE_PROJECTS_TEST_DATA);
  }

  getPerson(id: string): Observable<PersonInterface | undefined> {
    return of(PERSON_TEST_DATA.find((object) => object._id_ === id));
  }
}
