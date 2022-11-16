import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ActiveProjectsComponent } from './project-administration/active-projects/active-projects.component';
import { PersonComponent } from './project-administration/person/person.component';
import { ProjectComponent } from './project-administration/project/project.component';
import { ToolComponentDetailsComponent } from './tools/tool-component-details/tool-component-details.component';
import { ToolGalleryComponent } from './tools/tool-gallery/tool-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'active-projects', component: ActiveProjectsComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'project/:id', component: ProjectComponent },
      { path: 'person', component: PersonComponent },
      { path: 'person/:id', component: PersonComponent },
    ],
  },
  {
    path: 'tools',
    component: AppLayoutComponent,
    children: [
      { path: '', component: ToolGalleryComponent },
      { path: ':componentType/:componentName', component: ToolComponentDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
