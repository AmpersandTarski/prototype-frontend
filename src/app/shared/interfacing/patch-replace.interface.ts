export interface PatchReplace {
    op: 'replace',
    path: string,
    value: string | null,
}
