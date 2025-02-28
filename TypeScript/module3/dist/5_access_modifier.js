"use strict";
{
    // Access Modifier
    class BankAccount {
        constructor(id, name, balance, _isStudentAccount = false) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._isStudentAccount = _isStudentAccount;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
        displayInfo() {
            console.log(`ID: ${this.id}, Name: ${this.name}, Balance: ${this.getBalance()}, Is Student Account: ${this._isStudentAccount}`);
        }
    }
    const accountHolder1 = new BankAccount(123, "Mr. Rahim", 100);
    accountHolder1.addDeposit(20);
    accountHolder1.displayInfo();
    class StudentAccount extends BankAccount {
        constructor(id, name, _balance) {
            super(id, name, _balance);
            this._isStudentAccount = true;
        }
    }
    const studentAccount1 = new StudentAccount(111, "Karim", 5);
    studentAccount1.displayInfo();
}
