import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { IBackendService } from './backend.service.interface';
import { PersonInterface } from './person/person.interface';

@Injectable()
export class BackendService implements IBackendService {
  constructor(private http: HttpClient) {}

  getActiveProjects(): Observable<ActiveProjectsInterface[]> {
    return this.http.get<ActiveProjectsInterface[]>('resource/SESSION/1/Active_32_projects');
  }

  getPerson(id: string): Observable<PersonInterface> {
    return this.http.get<PersonInterface>(`resource/Person/${id}/Person`);
  }
}
