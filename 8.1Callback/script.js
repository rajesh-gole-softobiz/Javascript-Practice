// //Code-1: Asynchronous
// const taskOne = () =>{
//     console.log("Task1");
// }

// // This is Asynchronous
// const dataLoading = () => {
//     console.log("Task2 dataLoading");
// }

// const taskTwo = () =>{
// setTimeout(dataLoading,3000);
// }
// const taskThree = () =>{
// console.log("Task3");
// }
// const taskFour = () =>{
// console.log("Task4");
// }
// const taskFive = () =>{
// console.log("Task5");
// }


// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();


// //Code-2: Callback function
// function square(x){
//     console.log(`Square  of ${x} : ${x*x}`);
// }

// function higherOrderFunction(num, callback){
//     callback(num); // here callback is the square
// }

// higherOrderFunction(5,square);



//Code-3: Call back with asynchronous : first Task-1 will display, then Task-2, then Task-3
const taskOne = (callback) =>{
    console.log("Task1");
    callback();
}


const taskTwo = (callback) =>{
setTimeout(() => {
    console.log("Task2 dataLoading");
    callback();
},3000);
}

const taskThree = () =>{
console.log("Task3");
}

taskOne(function f1() {
    taskTwo( () => {
        taskThree();
    });
});


