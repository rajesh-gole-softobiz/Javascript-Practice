console.log("welcome");

//How to create a promise -(3 states of a promise) pending,resolve,reject

const promise1 = new Promise((resolve,reject) =>{
    let completedPromise = false;

    if(completedPromise){
        resolve(`Promise-1 Completed`);
    }else{
        reject(`Promise-1 Not Complete`);
    }
        
})

//If promise resolve -> 'then' will  be called else catch will be called
promise1
    .then(res=> {
        console.log(res);
        })

    .catch((err)=>{
        console.log(err);
        })



// console.log(promise1);
console.log("end");