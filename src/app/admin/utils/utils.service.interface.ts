import { Observable } from 'rxjs';
import { Notifications } from 'src/app/shared/interfacing/notifications.interface';

export interface IUtilsService {
  getEvaluateAllRules(): Observable<Notifications>;

  getRunExecutionEngine(): Observable<Notifications>;

  getRegenerateAllAtomIds(): Observable<Notifications>;

  getRegenerateAtom(concept: string): Observable<Notifications>;
}
