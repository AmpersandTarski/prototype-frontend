import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notifications } from 'src/app/shared/interfacing/notifications';
import { IUtilsService } from './utils.service.interface';

@Injectable()
export class UtilsService implements IUtilsService {
  constructor(private http: HttpClient) {}

  public getEvaluateAllRules(): Observable<Notifications> {
    return this.http.get<Notifications>('admin/ruleengine/evaluate/all');
  }

  public getRunExecutionEngine(): Observable<Notifications> {
    return this.http.get<Notifications>('admin/execengine/run');
  }
}
