var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // Encaptsulation in OOP
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance, _isStudentAccount) {
            if (_isStudentAccount === void 0) { _isStudentAccount = false; }
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._isStudentAccount = _isStudentAccount;
        }
        BankAccount.prototype.addDeposit = function (amount) {
            this._balance = this._balance + amount;
        };
        BankAccount.prototype.getBalance = function () {
            return this._balance;
        };
        BankAccount.prototype.displayInfo = function () {
            console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Balance: ").concat(this.getBalance(), ", Is Student Account: ").concat(this._isStudentAccount));
        };
        return BankAccount;
    }());
    var accountHolder1 = new BankAccount(123, "Mr. Rahim", 100);
    accountHolder1.addDeposit(20);
    accountHolder1.displayInfo();
    var StudentAccount = /** @class */ (function (_super) {
        __extends(StudentAccount, _super);
        function StudentAccount(id, name, _balance) {
            var _this = _super.call(this, id, name, _balance) || this;
            _this._isStudentAccount = true;
            return _this;
        }
        return StudentAccount;
    }(BankAccount));
    var studentAccount1 = new StudentAccount(111, "Karim", 5);
    studentAccount1.displayInfo();
}
