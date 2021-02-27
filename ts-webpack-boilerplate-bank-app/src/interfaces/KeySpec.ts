export interface KeySpec {
    equals: (sample: KeySpec) => boolean,
    toNumber: () => number
}