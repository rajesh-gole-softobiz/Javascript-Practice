console.log("Welcome");

const taskOne = () => {
    return new Promise((resolve,reject) =>{
        resolve('Task-1 is completed');
    })
}

const taskTwo = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Task-2 is completed');
        },2000);
    })
}

const taskThree = () => {
    return new Promise((resolve,reject) =>{
        reject('Task-3 is completed');
    })
}

const taskFour = () => {
    return new Promise((resolve,reject) =>{
        resolve('Task-4 is completed');
    })
}

//1st -> Task1 completed, then wait for 2s to complete Task2,then Task3,Task4
taskOne()
.then((res)=> console.log(res))
.then(taskTwo)
.then((res)=> console.log(res))
.then(taskThree)
.then((res)=> console.log(res))
.then(taskFour)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))


// taskOne()
//     .then((res)=> console.log(res));
// taskTwo()
//     .then((res)=> console.log(res));
// taskThree()
//     .then((res)=> console.log(res));
// taskFour()
//     .then((res)=> console.log(res));

console.log("end");