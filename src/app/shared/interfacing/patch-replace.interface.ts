export interface PatchReplace {
  op: 'add' | 'remove' | 'replace';
  path: string;
  // make generic
  value: string | boolean | null;
}
