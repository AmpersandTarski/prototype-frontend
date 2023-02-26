import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AmpersandInterface } from 'src/app/shared/interfacing/ampersand-interface.class';
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
export class PersonComponent extends AmpersandInterface<PersonInterface> implements OnInit {
  public data$!: Observable<PersonInterface>;
  private personId!: string;

  constructor(private route: ActivatedRoute, protected service: BackendService, http: HttpClient) {
    super(http);
  }

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
    new Error('delete method called, but should be unreachable.');
    return EMPTY;
  }
}
