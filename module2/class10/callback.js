// // function firstName(){
// //     console.log("Yaswanth");
// // }


// // firstName();
// // lastName();

// var fxnExpresssion = function(){
//     console.log("I am function expression");
// }

// fxnExpresssion();

// function firstName(fxn){
//     console.log("Yaswanth")
//     fxn();
// }

// function lastName(){
//     console.log("Kumar");
// }

// firstName(lastName);

function sum(num1,num2){
    console.log(num1+num2);
}
var a = 20;
sum(5,a)

function printName(cb1,cb2,cb3){
    console.log("Aviral");
    cb1();
    cb2();
    cb3();
}

function printLastName(){
    console.log("Sharma")
}

function printAge(){
    console.log("We have no idea");
}

function printAddress(){
    console.log("No idea about address")
}

printName(printLastName,printAge,printAddress);


function hof(cb){
    console.log(" I am a higher order function as I am accepting a funciton in argument");
    cb();
}

function cb(){
    console.log("I am callback as I'll be passed as an argument to another function")
}

hof(cb);