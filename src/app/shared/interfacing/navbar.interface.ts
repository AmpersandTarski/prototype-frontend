import { Notifications } from './notifications.interface';

export type Navbar = {
  defaultSetting: DefaultSettings;
  home: string;
  session: Session;
  sessionRoles: Array<SessionRole>;
  sessionVars: false | { [key: string]: unknown };
  notifications: Notifications;
  navs: Array<Navs>;
  new: Array<New>;
  ext: Array<unknown>; // ignore; not reusing in new frontend
  role: Array<unknown>; // ignore; not reusing in new frontend. This was structure for additional items in the role menu
};

type DefaultSettings = {
  autoSave: boolean;
  notify_autoHideSuccesses: boolean;
  notify_showErrors: boolean;
  notify_showInfos: boolean;
  notify_showInvariants: boolean;
  notify_showSignals: boolean;
  notify_showSuccesses: boolean;
  notify_showWarnings: boolean;
};

export type Navs = {
  id: MenuItemId;
  ifc: string | null;
  label: string;
  parent: MenuItemId | null;
  seqNr: number | null;
  url: string | null;
};

type MenuItemId = string;

type New = {
  label: string;
  ifcs: Array<Ifcs>;
};

type Ifcs = {
  id: string;
  label: string;
  link: string;
  resourceType: string;
};

type Session = {
  id: string;
  loggedIn: boolean;
};

export type SessionRole = {
  id: string;
  label: string;
  active: boolean;
};

export type InterfaceName = string;
