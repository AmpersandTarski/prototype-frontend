import { Notifications } from './notifications.interface';

export interface Navbar {
  defaultSetting: DefaultSettings;
  ext: Array<Ext>;
  home: string;
  navs: Array<Navs>;
  new: Array<New>;
  notifications: Notifications;
  role: [];
  session: Session;
  sessionRoles: Array<SessionRole>;
  sessionVars: boolean;
}

interface DefaultSettings {
  autoSave: boolean;
  notify_autoHideSuccesses: boolean;
  notify_showErrors: boolean;
  notify_showInfos: boolean;
  notify_showInvariants: boolean;
  notify_showSignals: boolean;
  notify_showSuccesses: boolean;
  notify_showWarnings: boolean;
}

interface Ext {
  url: string;
  function: Object;
}

export interface Navs {
  id: string;
  ifc: string | null;
  label: string;
  parent: string | null;
  seqNr: number | null;
  url: string | null;
}

interface New {
  ifcs: Array<Ifcs>;
  label: string;
}

interface Ifcs {
  id: string;
  label: string;
  link: string;
  resourceType: string;
}

interface Session {
  id: string;
  loggedIn: boolean;
}

export interface SessionRole {
  id: string;
  label: string;
  active: boolean;
}
