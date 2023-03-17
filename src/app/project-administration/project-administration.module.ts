import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { InactiveProjectsComponent } from './inactive-projects/inactive-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { PeopleComponent } from './people/people.component';
import { BackendService } from './backend.service';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { ListAllInterfacesComponent } from './list-all-interfaces/list-all-interfaces.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { PersonComponent } from './person/person.component';
import { InterfaceRouteMap, INTERFACE_ROUTE_MAPPING_TOKEN } from '../config';
import { ButtonModule } from 'primeng/button';
import { RolesGuard } from '../admin/roles/roles.guard';
import { Role } from '../shared/models/roles';

const routes: Routes = [
  {
    path: 'p',
    component: AppLayoutComponent,
    children: [
      { path: 'active-projects', component: ActiveProjectsComponent },
      {
        path: 'inactive-projects',
        component: InactiveProjectsComponent,
        canActivate: [RolesGuard],
        data: {
          role: Role.Planner,
        },
      },
      { path: 'project', component: ProjectComponent },
      { path: 'project/:id', component: ProjectComponent },
      {
        path: 'people',
        component: PeopleComponent,
        canActivate: [RolesGuard],
        data: {
          role: Role.Planner,
        },
      },
      { path: 'person/:id', component: PersonComponent },
      { path: 'list-all-interfaces', component: ListAllInterfacesComponent },
      { path: 'new-edit-project/:id', component: ProjectEditComponent },
    ],
  },
];

const INTERFACE_ROUTE_MAP: InterfaceRouteMap = {
  Active_32_projects: '/p/active-projects',
  Edit_32_interface: '/p/edit-interface',
  Edit_32_menu_32_item: '/p/edit-menu-item',
  Edit_32_navigation_32_menu: '/p/edit-navigation-menu',
  Inactive_32_projects: '/p/inactive-projects',
  List_32_all_32_interfaces: '/p/list-all-interfaces',
  My_32_projects: '/p/my-projects',
  New_47_edit_32_project: '/p/new-edit-project',
  People: '/p/people',
  Person: '/p/person',
  Project: '/p/project',
};

@NgModule({
  declarations: [
    ActiveProjectsComponent,
    InactiveProjectsComponent,
    ProjectComponent,
    PersonComponent,
    PeopleComponent,
    ProjectEditComponent,
    ListAllInterfacesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), ButtonModule],
  providers: [
    { provide: BackendService, useClass: BackendService },
    { provide: INTERFACE_ROUTE_MAPPING_TOKEN, useValue: INTERFACE_ROUTE_MAP },
  ],
})
export class ProjectAdministrationModule {}
