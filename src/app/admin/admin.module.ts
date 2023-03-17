import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { InstallerComponent } from './installer/installer.component';
import { InstallerService } from './installer/installer.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MenuModule } from 'primeng/menu';
import { UtilsComponent } from './utils/utils.component';
import { UtilsService } from './utils/utils.service';
import { PopulationComponent } from './population/population.component';
import { PopulationService } from './population/population.service';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';
import { ImportComponent } from './population/import/import.component';
import { RolesComponent } from './roles/roles.component';
import { RolesService } from './roles/roles.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      {
        path: 'installer',
        component: InstallerComponent,
      },
      {
        path: 'utils',
        component: UtilsComponent,
      },
      {
        path: 'population',
        component: PopulationComponent,
      },
      {
        path: 'population/import',
        component: ImportComponent,
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
  declarations: [
    InstallerComponent,
    UtilsComponent,
    PopulationComponent,
    ReportComponent,
    ImportComponent,
    RolesComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule, ButtonModule, NgxDropzoneModule, MenuModule],
  providers: [
    { provide: InstallerService, useClass: InstallerService },
    { provide: UtilsService, useClass: UtilsService },
    { provide: PopulationService, useClass: PopulationService },
    { provide: ReportService, useClass: ReportService },
    { provide: RolesService, useClass: RolesService },
  ],
  exports: [RolesComponent],
})
export class AdminModule {}
