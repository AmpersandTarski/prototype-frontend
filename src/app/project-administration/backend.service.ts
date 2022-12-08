import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { IBackendService } from './backend.service.interface';
import { ListAllInterfacesInterface } from './list-all-interfaces/list-all-interfaces.interface';
import { PersonInterface } from './person/person.interface';
import { ProjectInterface } from './project/project.interface';

@Injectable()
export class BackendService implements IBackendService {
  constructor(private http: HttpClient) {}

  getActiveProjects(): Observable<ActiveProjectsInterface[]> {
    return this.http.get<ActiveProjectsInterface[]>('resource/SESSION/1/Active_32_projects');
  }

  getProject(id: string): Observable<ProjectInterface> {
    return this.http.get<ProjectInterface>(`resource/Project/${id}/Project`);
  }

  getPerson(id: string): Observable<PersonInterface> {
    return this.http.get<PersonInterface>(`resource/Person/${id}/Person`);
  }

  getAllInterfaces(): Observable<ListAllInterfacesInterface[]> {
    return this.http.get<ListAllInterfacesInterface[]>('resource/SESSION/1/List_32_all_32_interfaces');
  }
}
