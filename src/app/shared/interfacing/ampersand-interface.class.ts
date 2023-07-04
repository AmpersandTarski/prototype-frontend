import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';
import { ObjectBase } from '../objectBase.interface';
import { Patch, PatchValue } from './patch.interface';
import { PatchResponse } from './patch-response.interface';
import { DeleteResponse } from './delete-response.interface';
import { CreateResponse } from './create-response.interface';

export class AmpersandInterface<T> {
  public data$!: Observable<T>;
  public typeAheadData: { [path: string]: Observable<Array<ObjectBase>> } = {};

  constructor(protected http: HttpClient) {}

  public fetchDropdownMenuData(path: string): Observable<Array<ObjectBase>> {
    if (!(path in this.typeAheadData)) {
      const source = this.http.get<Array<ObjectBase>>(path);
      const sharedObservable = source.pipe(share());
      this.typeAheadData[path] = sharedObservable;
    }
    return this.typeAheadData[path];
  }

  public post(path: string): Observable<CreateResponse> {
    return this.http.post<CreateResponse>(path, {});
  }

  public patch(path: string, patches: Array<Patch | PatchValue>): Observable<PatchResponse<T>> {
    return this.http.patch<PatchResponse<T>>(path, patches);

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

  public delete(resourcePath: string, path?: string): Observable<DeleteResponse> {
    const fullPath: string = path ? `${resourcePath}/${path}` : resourcePath;
    return this.http.delete<DeleteResponse>(fullPath);
  }
}
