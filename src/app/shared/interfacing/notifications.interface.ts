export type Notifications = {
  errors: Array<Info>;
  warnings: Array<Info>;
  infos: Array<Info>;
  successes: Array<Info>;
  invariants: Array<Invariant>;
  signals: Array<Info>;
};

type Info = {
  message: string;
};

type Invariant = {
  ruleMessage: string;
  tuples: Array<string>;
};
