import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstallerService } from './installer.service.interface';

@Injectable()
export class InstallerService implements IInstallerService {
  constructor(private http: HttpClient) {}

  public getReinstall(defaultPop: boolean, ignoreInvariants: boolean): Observable<Notification> {
    return this.http.get<Notification>('admin/installer', {
      params: { defaultPop: defaultPop, ignoreInvariantRules: ignoreInvariants },
    });
  }

  public getChecksumUpdate(): Observable<Notification> {
    return this.http.get<Notification>('admin/installer/checksum/update');
  }
}
