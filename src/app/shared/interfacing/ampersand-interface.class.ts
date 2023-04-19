import { HttpClient } from '@angular/common/http';
import { from, Observable, tap } from 'rxjs';
import { ObjectBase } from '../objectBase.interface';
import { Patch, PatchValue } from './patch.interface';
import { PatchResponse } from './patch-response.interface';
import { DeleteResponse } from './delete-response.interface';
import { MessageService } from 'primeng/api';

export class AmpersandInterface<T> {
  public data$!: Observable<T>;

  constructor(protected http: HttpClient) {}

  public patch(resource: ObjectBase, patches: Array<Patch | PatchValue>): Observable<PatchResponse<T>> {
    return this.http.patch<PatchResponse<T>>(resource._path_, patches);

    // return this.http.patch<PatchResponse<T>>(resource._path_, patches).pipe(
    //   tap((x) => {
    //     // console.log('Current resource', resource);
    //     // console.log('Received object from API', x.content);

    //     // Below a naive implementation that just overwrites the whole data$ value
    //     // FIXME: we want a more finegrained approach where the component data is updated,
    //     // to e.g. keep the tab-select on an element in the UI. Let's fix this later.
    //     this.data$ = from([x.content as T]);
    //   }),
    // );

    // return this.service.patchProject(this.projectId, patches).pipe(
    //   tap((x) => {
    //     if (x.isCommitted) {
    //       this.data$ = from([x.content]);
    //     }
    //   }),
    // );
  }

  public delete(resource: ObjectBase, path?: string): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${resource._path_}/${path}`);
  }
}
