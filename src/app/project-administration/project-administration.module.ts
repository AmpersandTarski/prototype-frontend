import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveProjectsComponent } from './active-projects/active-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { PersonComponent } from './person/person.component';
import { PersonsComponent } from './persons/persons.component';
import { BackendService } from './backend.service';
import { BackendMockService } from './backend.mock.service';

@NgModule({
  declarations: [ActiveProjectsComponent, ProjectComponent, PersonComponent, PersonsComponent],
  imports: [CommonModule, SharedModule],
  providers: [{ provide: BackendService, useClass: BackendService }],
})
export class ProjectAdministrationModule {}
