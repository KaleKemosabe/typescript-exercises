import { KeySpec } from './../interfaces/KeySpec';
import { BankAccountSpec } from './../interfaces/BankAccountSpec';

export class BankAccount implements BankAccountSpec {
    balance: number;
    key: KeySpec;

    constructor(balance: number, key: KeySpec) {
        this.balance = balance;
        this.key = key;
    }

    deposit(amount: number): boolean{
        if (amount < 0) return false;
        
        this.balance += amount;
        return true;
    }

    getKey(): KeySpec {
        return this.key;
    }

    getBalance(): number {
        return this.balance;
    }
}