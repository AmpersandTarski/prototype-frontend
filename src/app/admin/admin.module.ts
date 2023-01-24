import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallerComponent } from './installer/installer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { UtilsComponent } from './utils/utils.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      { path: 'installer', component: InstallerComponent },
      {
        path: 'utils',
        component: UtilsComponent,
      },
    ],
  },
];

export const menuItems: MenuItem[] = [
  {
    label: 'Admin',
    items: [
      { label: 'Installer', icon: 'pi pi-fw pi-replay', routerLink: ['/admin/installer'] },
      { label: 'Utils', icon: 'pi pi-fw pi-cog', routerLink: ['/admin/utils'] },
    ],
  },
];

@NgModule({
  declarations: [InstallerComponent, UtilsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule, ButtonModule],
})
export class AdminModule {}
