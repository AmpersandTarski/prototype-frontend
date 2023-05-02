import { Notifications } from './notifications.interface';
import { Patch, PatchValue } from './patch.interface';

export interface PatchResponse<T> {
  content: T;
  patches: Array<Patch | PatchValue>;
  notifications: Notifications;
  invariantRulesHold: boolean;
  isCommitted: boolean;
  sessionRefreshAdvice: boolean;
  navTo: string | null;
}
