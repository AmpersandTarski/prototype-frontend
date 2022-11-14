import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [ActiveProjectsComponent, ProjectComponent, PersonComponent],
  imports: [CommonModule, SharedModule],
})
export class ProjectAdministrationModule {}
