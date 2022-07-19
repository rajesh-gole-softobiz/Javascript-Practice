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

// const rajeshAccount = new BankAccount('Rajesh Gole',1000);
// const abcAccount = new BankAccount('ABC');
// rajeshAccount.deposit(5000);
// rajeshAccount.withdraw(2000);
// console.log(rajeshAccount,abcAccount);


//==================================

const accounts =[];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // after refreshing page data will not lose
    const account = new BankAccount(customerName.value, +balance.value); // + symbol means this string will converted to number
    //console.log(customerName.value, balance.value);

    accounts.push(account);
    console.log(accounts);
})

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // after refreshing page data will not lose
    const account = accounts.find(
        (account)=> account.accountNumber ===+accountNumber.value)
    
    account.deposit(+amount.value);
    console.log(accounts);
})
