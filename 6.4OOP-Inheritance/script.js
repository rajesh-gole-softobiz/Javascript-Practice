// //Inheritance solve DRY(Do not Repeat Yourself) problem. We don't need to write same code again
//============Inheritance using  class======================
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

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName,balance); 
    }

    takeBusinessLoan(amount){
        console.log('Taking Business Loan : ' + amount);
    }
}

class SavingsAccount extends BankAccount {
    transactionLimit = 10000;

    constructor(customerName, balance = 0){
        super(customerName,balance); 
    }

    takePersonalLoan(amount){
        console.log('Taking Personal Loan : ' + amount);
    }
}

const rajeshAccount = new SavingsAccount('Rajesh', 4500);

rajeshAccount.deposit(500);
rajeshAccount.withdraw(200);
rajeshAccount.takePersonalLoan(40000);
console.log(rajeshAccount);









//============Inheritance using constructor function======================

// function BankAccount(customerName, balance= 0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance= balance;
// }

// //Prototype : The prototype is an object that is associated with every functions
// BankAccount.prototype.deposit = function (amount) { //we can't use arrow function on prototype
//     this.balance +=amount;
// };
// BankAccount.prototype.withdraw = function (amount) { //we can't use arrow function on prototype
//     this.balance -=amount;
// };

// function CurrentAccount(customerName, balance= 0){
//     BankAccount.call(this,customerName,balance)
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function(amount){
//     console.log('Taking business loan : '+amount);
// }

// function SavingsAccount(customerName, balance= 0){
//     BankAccount.call(this,customerName,balance) // This is called "Constructor Linking", parent constructor linked to child constructor // BankAccount.call(this,...,...) this means SavingAccount
//     this.transactionLimit = 50000;
// }


// SavingsAccount.prototype = Object.create(BankAccount.prototype)

// SavingsAccount.prototype.takePersonalLoan = function(amount){
//     console.log('Taking personal loan : '+amount);
// }

// const rajeshAccount = new SavingsAccount('Rajesh', 4500);

// rajeshAccount.deposit(500);
// rajeshAccount.withdraw(200);
// console.log(rajeshAccount);