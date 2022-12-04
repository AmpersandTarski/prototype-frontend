import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { PersonComponent } from './person/person.component';
import { PersonsComponent } from './persons/persons.component';
import { BackendService } from './backend.service';
import { BackendMockService } from './backend.mock.service';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { MenuItem } from 'primeng/api';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'active-projects', component: ActiveProjectsComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'project/:id', component: ProjectComponent },
      { path: 'persons', component: PersonsComponent },
      { path: 'person/:id', component: PersonComponent },
      { path: 'person', component: PersonComponent },
    ],
  },
];

export const menuItems: MenuItem[] = [
  {
    label: 'Project administration',
    items: [
      {
        label: 'Active projects',
        icon: 'pi pi-fw pi-bars',
        routerLink: ['/active-projects'],
      },
      {
        label: 'Project details',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/project'],
      },
      {
        label: 'Persons details',
        icon: 'pi pi-fw pi-bars',
        routerLink: ['/persons'],
      },
      {
        label: 'Person details',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/person'],
      },
    ],
  },
];

@NgModule({
  declarations: [ActiveProjectsComponent, ProjectComponent, PersonComponent, PersonsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [{ provide: BackendService, useClass: BackendService }],
})
export class ProjectAdministrationModule {}
