import { KeySpec } from '../interfaces/KeySpec';
import { BankAccountSpec } from './../interfaces/BankAccountSpec';

export class Database {
    accounts: BankAccountSpec[] = [];

    constructor(){}

    insert(account: BankAccountSpec): boolean {
        const foundDuplicate = this.find(account.getKey());
        if (Boolean(foundDuplicate)) return false;

        this.accounts.push(account);
        return true;
    }

    find(key: KeySpec): BankAccountSpec | undefined {
        return this.accounts.find(account => account.getKey().equals(key))
    }

    delete(key: KeySpec): boolean {
        const found = this.find(key);
        this.accounts = this.accounts.filter(account => !account.getKey().equals(key));
        return Boolean(found);
    }
}