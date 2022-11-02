import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ActiveProjectsComponent],
  imports: [CommonModule, SharedModule],
})
export class ProjectAdministrationModule {}
