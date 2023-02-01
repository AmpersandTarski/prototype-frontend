import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImportService } from './import.service.interface';

@Injectable()
export class ImportService implements IImportService {
  constructor(private http: HttpClient) {}
}
