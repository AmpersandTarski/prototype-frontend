import { Observable } from 'rxjs';

export interface IInstallerService {
  getReinstall(defaultPop: boolean, ignoreInvariants: boolean): Observable<Notification>;

  getChecksumUpdate(): Observable<Notification>;
}
