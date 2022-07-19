function BankAccount(customerName, balance= 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance= balance;

    this.deposit = (amount)=>{
        this.balance +=amount;
    }

    this.withdraw = (amount)=>{
        this.balance-=amount;
    }
}

const rajeshAccount = new BankAccount('Rajesh Gole');
// const abcAccount = new BankAccount('ABC',1000);
// console.log(rajeshAccount);

//Prototype : The prototype is an object that is associated with every functions
BankAccount.prototype.deposit = function (amount) { //we can't use arrow function on prototype
    this.balance +=amount;
};
BankAccount.prototype.withdraw = function (amount) { //we can't use arrow function on prototype
    this.balance -=amount;
};
rajeshAccount.deposit(3000);
rajeshAccount.withdraw(1000);
console.log(rajeshAccount);

// console.log(BankAccount.prototype);

