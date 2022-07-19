//Inheritance solve DRY(Do not Repeat Yourself) problem. We don't need to write same code again

function BankAccount(customerName, balance= 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance= balance;
}

//Prototype : The prototype is an object that is associated with every functions
BankAccount.prototype.deposit = function (amount) { //we can't use arrow function on prototype
    this.balance +=amount;
};
BankAccount.prototype.withdraw = function (amount) { //we can't use arrow function on prototype
    this.balance -=amount;
};

function CurrentAccount(customerName, balance= 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance= balance;
    this.transactionLimit = 50000;
}

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('Taking business loan : '+amount);
}

CurrentAccount.prototype.deposit = function (amount) { //we can't use arrow function on prototype
    this.balance +=amount;
};
CurrentAccount.prototype.withdraw = function (amount) { //we can't use arrow function on prototype
    this.balance -=amount;
};

function SavingsAccount(customerName, balance= 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance= balance;
    this.transactionLimit = 50000;
}

SavingsAccount.prototype.takePersonalLoan = function(amount){
    console.log('Taking personal loan : '+amount);
}

SavingsAccount.prototype.deposit = function (amount) { //we can't use arrow function on prototype
    this.balance +=amount;
};
SavingsAccount.prototype.withdraw = function (amount) { //we can't use arrow function on prototype
    this.balance -=amount;
};

const rajeshAccount = new SavingsAccount('Rajesh', 4500);

console.log(rajeshAccount);