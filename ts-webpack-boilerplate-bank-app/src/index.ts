import { BankAccount } from "./classes/BankAccount";
import { Database } from "./classes/Database";
import { Key } from "./classes/Key";

let db = new Database();

let firstKey = new Key(12345);
let firstAccount = new BankAccount(5000, firstKey)
let firstResult = db.insert(firstAccount);

let secondKey = new Key(234354);
let secondAccount = new BankAccount(10000, secondKey)
let secondResult = db.insert(secondAccount);

console.log('First DB account', firstResult);
console.log('Second DB account', secondResult);

let thirdKey = new Key(456);

let found = db.find(thirdKey);
console.log('Account lookup', found)

found = db.find(secondKey);
console.log('Account lookup', found);

let deletionStatus = db.delete(thirdKey);
console.log('Try deleting an account with thirdkey', deletionStatus);

deletionStatus = db.delete(secondKey);
console.log('Try deleting an account with secondKey', deletionStatus);

found = db.find(secondKey);
console.log('Account lookup', found);



