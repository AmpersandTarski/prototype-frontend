import { Notifications } from './notifications';
import { Patch, PatchValue } from './patch';

export interface PatchResponse<T> {
  content: T;
  patches: Array<Patch | PatchValue>;
  //   TODO: change unknown types
  notifications: Notifications;
  invariantRulesHold: boolean;
  isCommitted: boolean;
  sessionRefreshAdvice: boolean;
  navTo: string | null;
}
