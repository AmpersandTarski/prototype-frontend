import { PatchReplace } from "./patch-replace.interface"

export interface PatchResponse<T> {
    content: T,
    patches: Array<PatchReplace>,
    notifications: {
        errors: Array<any>,
        warnings: Array<any>,
        infos: Array<any>,
        successes: Array<any>,
        invariants: Array<any>,
        signals: Array<any>,
    },
    invariantRulesHold: boolean,
    isCommitted: boolean,
    sessionRefreshAdvice: boolean,
    navTo: string | null,
}
