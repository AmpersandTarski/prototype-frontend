import { Notifications } from './notifications';
import { Patch, PatchValue } from './patch';

export interface DeleteResponse {
  patches: Array<Patch | PatchValue>;
  notifications: Notifications;
  invariantRulesHold: boolean;
  isCommitted: boolean;
  sessionRefreshAdvice: boolean;
  navTo: string | null;
}
