export interface Patch {
  op: 'replace' | 'remove' | 'add';
  path: string;
}

export interface PatchValue extends Patch {
  value: string | boolean | null;
}
