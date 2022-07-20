// // Asynchronous
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


// Callback function
function square(x){
    console.log(`Square  of ${x} : ${x*x}`);
}

function higherOrderFunction(num, callback){
    callback(num); // here callback is the square
}

higherOrderFunction(5,square);

