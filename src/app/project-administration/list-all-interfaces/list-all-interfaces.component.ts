import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
import { testdata } from '../active-projects/testdata';
import { BackendService } from '../backend.service';
import { ListAllInterfacesInterface } from './list-all-interfaces.interface';

@Component({
  selector: 'app-list-all-interfaces',
  templateUrl: './list-all-interfaces.component.html',
  styleUrls: ['./list-all-interfaces.component.css'],
})
export class ListAllInterfacesComponent extends AmpersandInterface<ListAllInterfacesInterface> implements OnInit {
  data$!: Observable<ListAllInterfacesInterface[]>;

  constructor(private service: BackendService) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.service.getAllInterfaces();
  }
}
