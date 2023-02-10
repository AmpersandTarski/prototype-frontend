export interface Patch {
  op: 'replace' | 'remove' | 'add';
  path: string;
}

export interface PatchValue extends Patch {
  // TODO: change any to generic
  value: any | null;
}
