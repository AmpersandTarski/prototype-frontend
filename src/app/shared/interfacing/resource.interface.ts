import { Observable } from 'rxjs';
import { Patch } from './patch';
import { PatchResponse } from './patch-response.interface';

export interface Resource<T> {
  patch(patches: Array<Patch>): Observable<PatchResponse<T>>;
}
