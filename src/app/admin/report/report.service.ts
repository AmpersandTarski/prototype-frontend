import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReportService } from './report.service.interface';

@Injectable()
export class ReportService implements IReportService {
  constructor(private http: HttpClient) {}

  // TODO: add types
  public getRelations() {
    return this.http.get('admin/report/relations');
  }

  public getConjunctUsage() {
    return this.http.get('admin/report/conjuncts/usage');
  }

  public getConjunctPerformance() {
    return this.http.get('admin/report/conjuncts/performance');
  }

  public getInterfaces() {
    return this.http.get('admin/report/interfaces');
  }

  public getInterfaceIssues() {
    return this.http.get('admin/report/interfaces/issues');
  }
}
