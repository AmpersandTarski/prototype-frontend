import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BackendService } from '../backend.service';
import { PersonInterface } from './person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  public data$!: Observable<PersonInterface>;
  private personId!: string;

  constructor(private route: ActivatedRoute, private service: BackendService) {}

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.personId = params.get('id')!;
        if (this.personId === null) {
          throw new Error('id does not exist');
        }
        return this.service.getPerson(this.personId);
      }),
    );
  }

  patchPerson(property: any, path: string) {
    let body = [
      {
        op: 'replace',
        path: path,
        value: property,
      },
    ];

    this.service.patchPerson(this.personId, body).subscribe(() => {
      this.data$ = this.service.getPerson(this.personId);
    });
  }
}
