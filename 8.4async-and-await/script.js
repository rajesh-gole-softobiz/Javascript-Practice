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
        resolve('Task-3 is completed');
    })
}

const taskFour = () => {
    return new Promise((resolve,reject) =>{
        resolve('Task-4 is completed');
    })
}

//1st -> Task1 completed, then wait for 2s to complete Task2,then Task3,Task4
// taskOne()
// .then((res)=> console.log(res))
// .then(taskTwo)
// .then((res)=> console.log(res))
// .then(taskThree)
// .then((res)=> console.log(res))
// .then(taskFour)
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))


const callAllTask = async ()=>{
    const t1 = await taskOne();
    console.log(t1);

    const t2 = await taskTwo();
    console.log(t2);

    const t3 = await taskThree();
    console.log(t3);

    const t4 = await taskFour();
    console.log(t4);
}
callAllTask();

console.log("end");