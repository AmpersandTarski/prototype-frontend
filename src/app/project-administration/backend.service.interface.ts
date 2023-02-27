import { Observable } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { InactiveProjectsInterface } from './inactive-projects/inactive-projects.interface';
import { PersonInterface } from './person/person.interface';
import { ProjectInterface } from './project/project.interface';

export interface IBackendService {
  // Returns observable that resolves to list of objects according to ActiveProjects interface
  getActiveProjects(): Observable<ActiveProjectsInterface>;

  getInactiveProjects(): Observable<InactiveProjectsInterface>;

  getProject(id: string): Observable<ProjectInterface | undefined>;

  getPerson(id: string): Observable<PersonInterface | undefined>;
}
