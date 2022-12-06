import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { IBackendService } from './backend.service.interface';
import { PersonInterface } from './person/person.interface';
import { ProjectInterface } from './project/project.interface';

@Injectable()
export class BackendService implements IBackendService {
  constructor(private http: HttpClient) {}

  getActiveProjects(): Observable<ActiveProjectsInterface[]> {
    return this.http.get<ActiveProjectsInterface[]>('resource/SESSION/1/Active_32_projects');
  }

  public getPeople(): Observable<PersonInterface[]> {
    return this.http.get<PersonInterface[]>('resource/SESSION/1/People');
  }

  getProject(id: string): Observable<ProjectInterface> {
    return this.http.get<ProjectInterface>(`resource/Project/${id}/Project`);
  }

  getPerson(id: string): Observable<PersonInterface> {
    return this.http.get<PersonInterface>(`resource/Person/${id}/Person`);
  }
}
