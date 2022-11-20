import { Observable } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';
import { PersonInterface } from './person/person.interface';

export interface IBackendService {
  // Returns observable that resolves to list of objects according to ActiveProjects interface
  getActiveProjects(): Observable<ActiveProjectsInterface[]>;

  getPerson(id: string): Observable<PersonInterface | undefined>;
}
