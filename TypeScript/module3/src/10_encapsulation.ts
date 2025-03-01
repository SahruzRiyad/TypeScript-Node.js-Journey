{
// Encaptsulation in OOP

class BankAccount{
    readonly id: number;
    name: string;
    private _balance: number;
    protected _isStudentAccount: boolean;

    constructor(id: number, name: string, balance: number, _isStudentAccount: boolean = false){
        this.id = id
        this.name = name
        this._balance = balance
        this._isStudentAccount = _isStudentAccount
    }

    public addDeposit(amount: number){
        this._balance = this._balance + amount;
    }

    public getBalance(){
        return this._balance;
    }

    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Balance: ${this.getBalance()}, Is Student Account: ${this._isStudentAccount}`);
    }
}

const accountHolder1 = new BankAccount(123,"Mr. Rahim", 100);

accountHolder1.addDeposit(20);
accountHolder1.displayInfo()

class StudentAccount extends BankAccount{
    constructor(id: number, name: string, _balance: number){
        super(id,name,_balance)
        this._isStudentAccount = true   
    }
}

const studentAccount1 = new StudentAccount(111,"Karim",5)
studentAccount1.displayInfo()
    
}