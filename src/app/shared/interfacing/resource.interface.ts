import { Observable } from 'rxjs';
import { Patch, PatchValue } from './patch.interface';
import { PatchResponse } from './patch-response.interface';

export interface Resource<T> {
  patch(patches: Array<Patch | PatchValue>): Observable<PatchResponse<T>>;
}
