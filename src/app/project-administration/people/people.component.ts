import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { PeopleInterface } from './people.interface';

@Component({
  selector: 'app-persons',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  data$!: Observable<PeopleInterface[]>;

  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.service.getPeople();
  }
}
