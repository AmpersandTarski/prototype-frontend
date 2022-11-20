import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveProjectsInterface } from './active-projects/active-projects.interface';

export interface IBackendService {
  // Returns observable that resolves to list of objects according to ActiveProjects interface
  getActiveProjects(): Observable<ActiveProjectsInterface[]>;
}
