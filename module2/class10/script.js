let a = 10;
console.log(a);

// hello();
// function hello(){
//     console.log("Hello world");
// }

// helloWorld();
// let helloWorld = function(){
//     console.log("Hello world from function Expression");
// }

let arr = [1,2,3,4,5];

function fxn(arr){
    arr.push(6);
    return arr;
}

let result = fxn(arr);
console.log(arr);
console.log(result);

function anotherFxn(arr){
    arr.push(7);
    return arr;
}

let anotherResult = anotherFxn(arr);
console.log(arr);
console.log(anotherResult);