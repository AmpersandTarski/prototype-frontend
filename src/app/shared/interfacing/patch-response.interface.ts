import { Patch } from './patch';

export interface PatchResponse<T> {
  content: T;
  patches: Array<Patch>;
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
