import { PatchReplace } from './patch-replace.interface';

export interface PatchResponse<T> {
  content: T;
  patches: Array<PatchReplace>;
  //   TODO: change unknown types
  notifications: {
    errors: Array<unknown>;
    warnings: Array<unknown>;
    infos: Array<unknown>;
    successes: Array<unknown>;
    invariants: Array<unknown>;
    signals: Array<unknown>;
  };
  invariantRulesHold: boolean;
  isCommitted: boolean;
  sessionRefreshAdvice: boolean;
  navTo: string | null;
}
