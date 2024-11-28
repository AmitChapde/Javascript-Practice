// // setTimeout function in js 
// //If one timeout has a greater delay than the other, 
// // the JavaScript runtime places the callback of the smaller
// //  delay into the event queue sooner. The event loop processes these callbacks in 
// //  order as they’re ready, so the callback with the smaller delay is executed first.

//syntax 
//setTimeout(callback, delay, arg1, arg2, ...);

// setTimeout(()=>{
//     console.log('after 2 secs')
// },3000)

// It schedules the callback to run after the specified delay, but it doesn't stop the execution of the remaining code. It is non-blocking and asynchronous.
// It’s placed in the macrotask queue of the JavaScript event loop, waiting until the call stack is empty

// let timeoutId=setTimeout(()=>{
//     console.log('GUNS')
// },5000 )

// console.log(timeoutId)
// clearTimeout(timeoutId)
// console.log(timeoutId)

// setTimeout vs setInterval:
// setTimeout: Executes the callback once after a delay.
// setInterval: Executes the callback repeatedly after every interval.

// const intervalId=setInterval(()=>{
//     console.log('repeated task after 2 secs ')
// },2000);

// console.log(intervalId)

// clearTimeout(intervalId)

// console.log(intervalId)

// function myClass(){
//     this.var='hello';
//     setTimeout(function(){
//         console.log(this.var)
//     },1000)
// }

// myClass()


// function myClass(){
//     this.car='toyota';
//     setTimeout(()=>{
//         console.log(this.car)
//     },2000)
// }

// myClass()

//closures in timeout

// when you pass a callback function to setTimeout, that callback has access to variables in the scope where it was created, even if the outer function (the function that defined those variables) has already executed. The callback keeps a reference to the variables from its lexical scope, which allows it to access them later when setTimeout executes.
function test(){
    let counter=0;
    setTimeout(()=>{
        counter++;
        console.log(counter)
    },2000)

}


test()