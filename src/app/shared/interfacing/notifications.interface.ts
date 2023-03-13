import { InterfaceName } from './navbar.interface';

export type Notifications = {
  errors: Array<Error>;
  warnings: Array<Warning>;
  infos: Array<Message>;
  successes: Array<Message>;
  invariants: Array<Invariant>;
  signals: Array<Signal>;
};

type Message = {
  message: string;
};

type Warning = {
  message: string;
  count: number;
};

type Error = {
  message: string;
  count: number;
  details?: string;
};

type Invariant = {
  ruleMessage: string;
  tuples: Array<{
    violationMessage: string;
  }>;
};

type Signal = {
  message: string;
  violations: Array<{
    message: string;
    ifcs: Array<{
      id: InterfaceName;
      label: string;
      link: string;
    }>;
  }>;
};
