import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SessionRole } from 'src/app/shared/interfacing/navbar.interface';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  public menuItems!: MenuItem[];

  constructor(private rolesService: RolesService) {}

  ngOnInit() {
    this.loadOrCreateMenu();
  }

  private loadOrCreateMenu() {
    let rolesMenu = sessionStorage.getItem('rolesMenuItems');
    if (rolesMenu != null) {
      // Using menu items in session storage.
      this.menuItems = JSON.parse(rolesMenu);
    } else {
      this.rolesService.getRoles().subscribe((roles) => {
        // maps the roles into menuItems
        this.menuItems = roles.map((role, index) => ({
          label: role.label,
          icon: role.active ? 'pi pi-check-circle' : 'pi pi-circle-off',
          command: () => this.patchRole(roles, index),
        }));
        // Store menu items in session storage
        this.rolesService.setSessionStorageItem('rolesMenuItems', JSON.stringify(this.menuItems));
      });
    }
  }

  private patchRole(roles: Array<SessionRole>, index: number): void {
    this.rolesService.patchRole(roles, index).subscribe((x) =>
      // updates menuItems' icon
      x[index].active
        ? (this.menuItems[index].icon = 'pi pi-check-circle')
        : (this.menuItems[index].icon = 'pi pi-circle-off'),
    );
    sessionStorage.clear();
    location.reload();
  }
}
