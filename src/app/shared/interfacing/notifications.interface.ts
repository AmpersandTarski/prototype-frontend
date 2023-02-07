export interface Notifications {
  errors: Array<unknown>;
  warnings: Array<unknown>;
  infos: Array<unknown>;
  successes: Array<unknown>;
  invariants: Array<unknown>;
  signals: Array<unknown>;
}
