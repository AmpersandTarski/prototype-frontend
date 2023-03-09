export interface Notifications {
  errors: Array<Info>;
  warnings: Array<Info>;
  infos: Array<Info>;
  successes: Array<Info>;
  invariants: Array<Invariant>;
  signals: Array<Info>;
}

export interface Info {
  message: string;
}

export interface Invariant {
  ruleMessage: string;
  tuples: Array<string>;
}
