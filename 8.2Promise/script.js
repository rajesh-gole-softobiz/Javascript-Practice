console.log("welcome");

//How to create a promise -(3 states of a promise) pending,resolve,reject

const promise1 = new Promise((resolve,reject) =>{
    let completedPromise = true;

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

const promise2 = new Promise((resolve,reject)=>{
    let p2 = true;

    if(p2){
        resolve(`Promise-2 Completed`);
    }else{
        reject(`Promise-2 Not Complete`);
    }
})        

//How to run multiple promise
Promise.all([promise1,promise2]).then((res1,res2)=>{
            console.log(res1,res2);
        })

// console.log(promise1);
console.log("end");



// race function will show the out among the promises, which promise will be completed first
// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// })