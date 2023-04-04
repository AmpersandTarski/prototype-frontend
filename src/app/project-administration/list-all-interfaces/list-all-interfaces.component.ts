import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { BackendService } from '../backend.service';
import { ListAllInterfacesInterface } from './list-all-interfaces.interface';

@Component({
  selector: 'app-list-all-interfaces',
  templateUrl: './list-all-interfaces.component.html',
  styleUrls: ['./list-all-interfaces.component.css'],
})
export class ListAllInterfacesComponent extends AmpersandInterface<ListAllInterfacesInterface> implements OnInit {
  constructor(protected service: BackendService, http: HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.data$ = this.service.getAllInterfaces();
  }
}
