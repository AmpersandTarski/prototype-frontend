import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EMPTY, from, Observable, switchMap, tap } from 'rxjs';
import { Patch } from 'src/app/shared/interfacing/patch.interface';
import { PatchResponse } from 'src/app/shared/interfacing/patch-response.interface';
import { BackendService } from '../backend.service';
import { PersonInterface } from './person.interface';
import { DeleteResponse } from 'src/app/shared/interfacing/delete-response.interface';

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

  patch(patches: Patch[]): Observable<PatchResponse<PersonInterface>> {
    return this.service.patchPerson(this.personId, patches).pipe(
      tap((x) => {
        if (x.isCommitted) {
          this.data$ = from([x.content]);
        }
      }),
    );
  }

  delete(id: string): Observable<DeleteResponse> {
    new Error('delete method called, but should now be able to be reached');
    return EMPTY;
  }
}
