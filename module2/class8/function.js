function sayHi(){
    console.log("Hello from the function")
}

var a = sayHi();
console.log(a);

function serverBeverages(quantity,drink){
    console.log("Here is your "+ quantity+ " " +drink);
}

serverBeverages(2,"Coffee");

function sum(a,b){
    return a+b;
}

var num = sum(5,9);
console.log(num);

var sayHiExpression = function(){
    console.log("Hello from function expression");
}

console.log(sayHiExpression);
sayHiExpression();

var arrowFxn = ()=>{
    console.log("hello from arrow fx");
}
arrowFxn();