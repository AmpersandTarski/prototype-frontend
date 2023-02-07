import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPopulationService } from './population.service.interface';

@Injectable()
export class PopulationService implements IPopulationService {
  private importUrl: string = 'admin/import';

  constructor(private http: HttpClient) {}

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

  /* Send files to API. */
  public importPopulation(files: File[]): Observable<any> {
    console.log('importPopulation() called with files: ');

    const formData = new FormData();

    files.forEach((file) => {
      console.log(file.name);

      formData.append('file', file, file.name);
    });

    return this.http.post(this.importUrl, formData);
  }
}
