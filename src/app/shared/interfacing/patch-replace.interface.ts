export interface PatchReplace {
  op: 'replace';
  path: string;
  // make generic
  value: string | boolean | null;
}
