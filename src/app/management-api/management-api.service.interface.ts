import { Observable } from 'rxjs';
import { Notifications } from '../shared/interfacing/notifications';
import { Population } from '../shared/interfacing/population';

export interface IManagementAPIService {
  getEvaluateAllRules(): Observable<Notifications>;

  getRunExecutionEngine(): Observable<Notifications>;

  getExportPopulation(): Observable<Population>;

  exportPopulation(jsonResponse: Population): void;
}
