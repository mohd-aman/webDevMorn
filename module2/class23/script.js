// function fxn(){
//     let d = 50;
//     console.log(d);
// }

// fxn();
// let a = 10;
// console.log(a);
// let b = 20;
// console.log(b);

// setTimeout(function(){
//     console.log("Hello");
// },2000);

// function fxn(cb){ // Higher Order Function.
//     console.log("I am HOF");
//     cb();
// }

// function gxn(){ // callback function
//     console.log("I am callback")
// }

// fxn(gxn);

console.log('1');

setTimeout(function cb1(){
    console.log('2');
},2000);

setTimeout(function cb2(){
    console.log('3')
},0);

console.log("4");
