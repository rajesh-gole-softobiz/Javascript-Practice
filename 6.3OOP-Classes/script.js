//const BankAccount = class {} // alternative way
class BankAccount{
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName,balance = 0){
        this.customerName= customerName;
        this.accountNumber=Date.now();
        this.balance = balance;

    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance-=amount;
    }
}

const rajeshAccount = new BankAccount('Rajesh Gole',1000);
rajeshAccount.deposit(4000);
rajeshAccount.withdraw(2000);

const abcAccount = new BankAccount("ABC");
abcAccount.deposit(300);
console.log(abcAccount);


// Hoisting not work with class (ie; first declare and then use it)