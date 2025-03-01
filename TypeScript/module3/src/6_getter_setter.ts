{
    // Getter-Setter
    
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
        
        set deposit(amount: number){
            this._balance += amount;
        }
        // public setBalance(amount: number){
        //     this._balance = this._balance + amount;
        // }
    
        get balance(){ // getter in Typesript
            return this._balance;
        }
        // public getBalance(){
        //     return this._balance;
        // }
    
        displayInfo(): void {
            console.log(`ID: ${this.id}, Name: ${this.name}, Balance: ${this.balance}, Is Student Account: ${this._isStudentAccount}`);
        }
    }
    
    const accountHolder1 = new BankAccount(123,"Mr. Rahim", 100);
    
    // const accBalance = accountHolder1.getBalance();
    const accBalance = accountHolder1.balance; // getter call
    console.log(`Current Account Balance is ${accBalance}`)

    accountHolder1.deposit = 20;
    console.log(`New Account Balance after 20 deposit is ${accountHolder1.balance}`)

    // accountHolder1.setBalance(-10);
    // console.log(`New Account Balance after -10 withdrawl is ${accountHolder1.getBalance()}`)
    accountHolder1.displayInfo()
    
    
    }