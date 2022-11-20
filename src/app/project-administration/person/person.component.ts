import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BackendService } from '../backend.service';
import { PersonInterface } from './person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  public data$: Observable<PersonInterface> = this.route.paramMap.pipe(
    switchMap((params) => {
      let id = params.get('id');
      if (id === null) {
        throw new Error();
      }
      return this.backend.getPerson(id);
    }),
  );

  constructor(private route: ActivatedRoute, private backend: BackendService) {}

  ngOnInit(): void {}
}
