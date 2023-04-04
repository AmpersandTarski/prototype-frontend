import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatchResponse } from '../shared/interfacing/patch-response.interface';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { ProjectInterface } from './project/project.interface';
import { IBackendService } from './backend.service.interface';
import { ListAllInterfacesInterface } from './list-all-interfaces/list-all-interfaces.interface';
import { PeopleInterface } from './people/people.interface';
import { PersonInterface } from './person/person.interface';
import { InactiveProjectsInterface } from './inactive-projects/inactive-projects.interface';
import { ProjectEditInterface } from './project-edit/project-edit.interface';
import { Patch } from '../shared/interfacing/patch.interface';
import { DeleteResponse } from '../shared/interfacing/delete-response.interface';

@Injectable()
export class BackendService implements IBackendService {
  constructor(private http: HttpClient) {}

  public getActiveProjects(): Observable<ActiveProjectsInterface> {
    return this.http.get<ActiveProjectsInterface>('resource/SESSION/1/Active_32_projects');
  }

  public getInactiveProjects(): Observable<InactiveProjectsInterface> {
    return this.http.get<InactiveProjectsInterface>('resource/SESSION/1/Inactive_32_projects');
  }

  public getPeople(): Observable<PeopleInterface> {
    return this.http.get<PeopleInterface>('resource/SESSION/1/People');
  }

  public postPeople(): Observable<{ _id_: string }> {
    return this.http.post<{ _id_: string }>(`resource/SESSION/1/People`, {});
  }

  public getProject(id: string): Observable<ProjectInterface> {
    return this.http.get<ProjectInterface>(`resource/Project/${id}/Project`);
  }

  public getProjectEdit(id: string): Observable<ProjectEditInterface> {
    return this.http.get<ProjectEditInterface>(`resource/Project/${id}/New_47_edit_32_project`);
  }

  public deleteProjectMember(projectId: string, projectMemberId: string): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(
      `resource/Project/${projectId}/New_47_edit_32_project/Project_32_members/${projectMemberId}`,
    );
  }

  public getPerson(id: string): Observable<PersonInterface> {
    return this.http.get<PersonInterface>(`resource/Person/${id}/Person`);
  }

  public getAllInterfaces(): Observable<ListAllInterfacesInterface> {
    return this.http.get<ListAllInterfacesInterface>('resource/SESSION/1/List_32_all_32_interfaces');
  }

  public patchProject(id: string, data: Patch[]): Observable<PatchResponse<ProjectEditInterface>> {
    return this.http.patch<PatchResponse<ProjectEditInterface>>(`resource/Project/${id}/New_47_edit_32_project`, data);
  }

  public postProject(): Observable<PatchResponse<PeopleInterface>> {
    return this.http.post<PatchResponse<PeopleInterface>>('resource/SESSION/1/Active_32_projects', {});
  }

  public patchPerson(id: string, data: Patch[]): Observable<PatchResponse<PersonInterface>> {
    return this.http.patch<PatchResponse<PersonInterface>>(`resource/Person/${id}/Person`, data);
  }

  public postPerson(): Observable<{ _id_: string }> {
    return this.http.post<{ _id_: string }>(`resource/Person`, {});
  }

  public deletePerson(id: string): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`resource/SESSION/1/People/${id}`);
  }
}
