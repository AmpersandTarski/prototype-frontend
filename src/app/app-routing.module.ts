import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ActiveProjectsComponent } from './project-administration/active-projects/active-projects.component';
import { ProjectComponent } from './project-administration/project/project.component';
import { ToolGalleryComponent } from './tools/tool-gallery/tool-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'active-projects', component: ActiveProjectsComponent },
      { path: 'project/:id', component: ProjectComponent },
    ],
  },
  {
    path: 'tools',
    component: AppLayoutComponent,
    children: [
      { path: '', component: ToolGalleryComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
