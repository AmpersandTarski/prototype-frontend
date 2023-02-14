import { Observable } from 'rxjs';

export interface IPopulationService {
  getExportPopulation(): Observable<Object>;

  getExportPopulationMetaModel(): Observable<Object>;

  exportPopulation(jsonResponse: Object): void;

  importPopulation(file: File): void;
}
