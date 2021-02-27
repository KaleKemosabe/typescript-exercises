import { KeySpec } from './KeySpec';

export interface BankAccountSpec {
    deposit: (amount: number) => boolean,
    getBalance: () => number,
    getKey: () => KeySpec
}