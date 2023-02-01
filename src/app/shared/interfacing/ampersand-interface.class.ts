import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ObjectBase } from '../objectBase.interface';
import { Patch, PatchValue } from './patch';
import { PatchResponse } from './patch-response.interface';

export class AmpersandInterface<T> {
  constructor(protected http: HttpClient) {}

  public patch<T>(resource: ObjectBase, patches: Array<Patch | PatchValue>): Observable<PatchResponse<T>> {
    return this.http.patch<PatchResponse<T>>(resource._path_, patches).pipe(
      tap((x) => {
        // TODO: show warning message of x.notifications.invariants
        if (!x.invariantRulesHold) {
          console.log('Invariants do not hold');
        }
      }),
    );

    // return this.service.patchProject(this.projectId, patches).pipe(
    //   tap((x) => {
    //     if (x.isCommitted) {
    //       this.data$ = from([x.content]);
    //     }
    //   }),
    // );
  }
}
