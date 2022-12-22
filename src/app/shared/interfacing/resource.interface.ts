import { Observable } from 'rxjs';
import { PatchReplace } from './patch-replace.interface';
import { PatchResponse } from './patch-response.interface';

export interface Resource<T> {
  patch(patches: Array<PatchReplace>): Observable<PatchResponse<T>>;
}
