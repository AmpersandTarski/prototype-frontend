import { from, Observable } from 'rxjs';
import { Patch, PatchValue } from './patch';
import { PatchResponse } from './patch-response.interface';

export class AmpersandInterface<T> {
  patch(patches: Array<Patch | PatchValue>): Observable<PatchResponse<T>> {
    return from([]);

    // return this.service.patchProject(this.projectId, patches).pipe(
    //   tap((x) => {
    //     if (x.isCommitted) {
    //       this.data$ = from([x.content]);
    //     }
    //   }),
    // );
  }
}
