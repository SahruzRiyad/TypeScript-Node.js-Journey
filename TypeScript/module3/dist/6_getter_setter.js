{
    // Getter-Setter
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance, _isStudentAccount) {
            if (_isStudentAccount === void 0) { _isStudentAccount = false; }
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._isStudentAccount = _isStudentAccount;
        }
        Object.defineProperty(BankAccount.prototype, "deposit", {
            set: function (amount) {
                this._balance += amount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BankAccount.prototype, "balance", {
            // public setBalance(amount: number){
            //     this._balance = this._balance + amount;
            // }
            get: function () {
                return this._balance;
            },
            enumerable: false,
            configurable: true
        });
        // public getBalance(){
        //     return this._balance;
        // }
        BankAccount.prototype.displayInfo = function () {
            console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Balance: ").concat(this.balance, ", Is Student Account: ").concat(this._isStudentAccount));
        };
        return BankAccount;
    }());
    var accountHolder1 = new BankAccount(123, "Mr. Rahim", 100);
    // const accBalance = accountHolder1.getBalance();
    var accBalance = accountHolder1.balance; // getter call
    console.log("Current Account Balance is ".concat(accBalance));
    accountHolder1.deposit = 20;
    console.log("New Account Balance after 20 deposit is ".concat(accountHolder1.balance));
    // accountHolder1.setBalance(-10);
    // console.log(`New Account Balance after -10 withdrawl is ${accountHolder1.getBalance()}`)
    accountHolder1.displayInfo();
}
