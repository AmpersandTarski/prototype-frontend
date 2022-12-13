import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { testdata } from '../active-projects/testdata';
import { BackendService } from '../backend.service';
import { ListAllInterfacesInterface } from './list-all-interfaces.interface';

@Component({
  selector: 'app-list-all-interfaces',
  templateUrl: './list-all-interfaces.component.html',
  styleUrls: ['./list-all-interfaces.component.css'],
})
export class ListAllInterfacesComponent implements OnInit {
  data$!: Observable<ListAllInterfacesInterface[]>;

  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAllInterfaces();
  }
}
