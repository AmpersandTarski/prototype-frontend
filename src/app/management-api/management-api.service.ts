import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notifications } from '../shared/interfacing/notifications';
import { IManagementAPIService } from './management-api.service.interface';

@Injectable()
export class ManagementAPIService implements IManagementAPIService {
  constructor(private http: HttpClient) {}

  public getEvaluateAllRules(): Observable<Notifications> {
    return this.http.get<Notifications>('admin/ruleengine/evaluate/all');
  }

  public getRunExecutionEngine(): Observable<Notifications> {
    return this.http.get<Notifications>('admin/execengine/run');
  }

  public getExportPopulation(): Observable<Object> {
    return this.http.get<Object>('admin/exporter/export/all');
  }

  public getExportPopulationMetaModel(): Observable<Object> {
    return this.http.get<Object>('admin/exporter/export/metamodel');
  }

  public exportPopulation(jsonResponse: Object): void {
    let currentDate = new Date().toISOString();

    // Creates a fake DOM and simulates the onClick to download the json file
    let theJSON = JSON.stringify(jsonResponse);
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    element.setAttribute('download', `ProjectAdministatrion_population_${currentDate}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
