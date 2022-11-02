import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ActiveProjectsComponent } from './project-administration/active-projects/active-projects.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent },
  { path: 'active-projects', component: ActiveProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
