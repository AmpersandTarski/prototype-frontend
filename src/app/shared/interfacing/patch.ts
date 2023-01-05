export interface Patch {
  op: 'replace' | 'remove' | 'add';
  path: string;
  // make generic
  value: string | boolean | null;
}
