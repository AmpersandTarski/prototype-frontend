export interface Notifications {
  errors: Array<unknown>;
  warnings: Array<unknown>;
  infos: Array<unknown>;
  successes: Array<unknown>;
  invariants: Array<Invariant>;
  signals: Array<unknown>;
}

export interface Invariant {
  ruleMessage: string;
  tuples: Array<string>;
}
