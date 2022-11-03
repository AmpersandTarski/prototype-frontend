import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ActiveProjectsComponent, ProjectComponent],
  imports: [CommonModule, SharedModule],
})
export class ProjectAdministrationModule {}
