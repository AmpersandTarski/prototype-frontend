import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { BaseInterfaceComponent } from '../BaseInterfaceComponent';
import { PeopleInterface } from './people.interface';

@Component({
  selector: 'app-persons',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent extends BaseInterfaceComponent implements OnInit {
  data$!: Observable<PeopleInterface[]>;
  public override crud: string = 'CRuD';
  constructor(private service: BackendService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.service.getPeople();
  }

  public newPerson(): void {
    const newPersonId = this.service.postPerson();
    newPersonId.subscribe((person) => {
      this.router.navigate(['p', 'person', `${person._id_}`]);
    });
  }

  public onDelete(id: string): void {
    this.service.deletePerson(id).subscribe((x) => {
      if (x.isCommitted) {
        this.data$ = this.service.getPeople();
      }
    });
  }
}
