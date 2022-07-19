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
    BankAccount.call(this,customerName,balance)
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('Taking business loan : '+amount);
}

function SavingsAccount(customerName, balance= 0){
    BankAccount.call(this,customerName,balance) // This is called "Constructor Linking", parent constructor linked to child constructor // BankAccount.call(this,...,...) this means SavingAccount
    this.transactionLimit = 50000;
}


SavingsAccount.prototype = Object.create(BankAccount.prototype)

SavingsAccount.prototype.takePersonalLoan = function(amount){
    console.log('Taking personal loan : '+amount);
}

const rajeshAccount = new SavingsAccount('Rajesh', 4500);

rajeshAccount.deposit(500);
rajeshAccount.withdraw(200);
console.log(rajeshAccount);