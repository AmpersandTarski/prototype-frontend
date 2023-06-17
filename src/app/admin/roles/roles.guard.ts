import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService } from './roles.service';

@Injectable({
  providedIn: 'root',
})
export class RolesGuard  {
  constructor(private rolesService: RolesService, private router: Router) {}

  // can only activate if it has the required role
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let isRole$: Observable<boolean> = this.rolesService.isRole(route.data['role']);
    isRole$.subscribe((x) => {
      if (!x) {
        this.router.navigate(['']);
      }
    });
    return isRole$;
  }
}
