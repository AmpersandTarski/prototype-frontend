import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Navbar, SessionRole } from 'src/app/shared/interfacing/navbar.interface';
import { Role } from 'src/app/shared/models/roles';

@Injectable()
export class RolesService {
  constructor(private http: HttpClient) {}

  public getRoles(): Observable<Array<SessionRole>> {
    let navbar: Observable<Navbar> = this.http.get<Navbar>('app/navbar');
    let roles: Observable<Array<SessionRole>> = navbar.pipe(map((x) => x.sessionRoles));
    return roles;
  }

  public patchRole(roles: Array<SessionRole>, roleIndex: number): Observable<Array<SessionRole>> {
    roles[roleIndex].active = !roles[roleIndex].active; // reverses the boolean value
    return this.http.patch<Array<SessionRole>>('app/roles', roles);
  }

  public isRole(role: Role): Observable<boolean> {
    return this.getRoles().pipe(map((x) => x[role].active));
  }

  public setSessionStorageItem(name: string, data: string) {
    sessionStorage.setItem(name, data);
  }
}
