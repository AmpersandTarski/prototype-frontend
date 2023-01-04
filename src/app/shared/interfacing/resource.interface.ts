import { Observable } from 'rxjs';
import { PatchGeneric, PatchReplace } from './patch-replace.interface';
import { PatchResponse } from './patch-response.interface';

export interface Resource<T> {
  patch(patches: Array<PatchReplace | PatchGeneric>): Observable<PatchResponse<T>>;
}
