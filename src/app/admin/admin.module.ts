import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallerComponent } from './installer/installer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { UtilsComponent } from './utils/utils.component';
import { PopulationComponent } from './population/population.component';
import { UtilsService } from './utils/utils.service';
import { PopulationService } from './population/population.service';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';

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
      {
        path: 'population',
        component: PopulationComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
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
      { label: 'Population', icon: 'pi pi-fw pi-users', routerLink: ['/admin/population'] },
      { label: 'Report', icon: 'pi pi-fw pi-pencil', routerLink: ['/admin/report'] },
    ],
  },
];

@NgModule({
  declarations: [InstallerComponent, UtilsComponent, PopulationComponent, ReportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule, ButtonModule],
  providers: [
    { provide: UtilsService, useClass: UtilsService },
    { provide: PopulationService, useClass: PopulationService },
    { provide: ReportService, useClass: ReportService },
  ],
})
export class AdminModule {}
