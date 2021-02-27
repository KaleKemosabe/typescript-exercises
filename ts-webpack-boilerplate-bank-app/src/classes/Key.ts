import { KeySpec } from '../interfaces/KeySpec';

export class Key implements KeySpec {
    numericalKey: number;

    constructor(num: number) {
        this.numericalKey = num;
    }

    equals(sample: KeySpec): boolean {
        return sample.toNumber() === this.numericalKey;
    }

    toNumber(): number {
        return this.numericalKey;
    }
}