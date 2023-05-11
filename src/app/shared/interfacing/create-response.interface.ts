import { ObjectBase } from '../objectBase.interface';
import { Notifications } from './notifications.interface';
import { Patch, PatchValue } from './patch.interface';

export interface CreateResponse {
  content: ObjectBase;
  patches: Array<Patch | PatchValue>;
  notifications: Notifications;
  invariantRulesHold: boolean;
  isCommitted: boolean;
  sessionRefreshAdvice: boolean;
  navTo: string | null;
}
