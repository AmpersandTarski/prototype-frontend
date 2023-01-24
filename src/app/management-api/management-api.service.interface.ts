import { Observable } from 'rxjs';
import { Notifications } from '../shared/interfacing/notifications';

export interface IManagementAPIService {
  getEvaluateAllRules(): Observable<Notifications>;

  getRunExecutionEngine(): Observable<Notifications>;

  getExportPopulation(): Observable<Object>;

  getExportPopulationMetaModel(): Observable<Object>;

  exportPopulation(jsonResponse: Object): void;
}
