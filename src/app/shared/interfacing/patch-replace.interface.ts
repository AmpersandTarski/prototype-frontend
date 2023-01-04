export interface PatchGeneric {
  op: 'add' | 'remove' | 'replace';
  path: string;
  // make generic
}

export interface PatchReplace extends PatchGeneric {
  value: string | boolean | null;
}
