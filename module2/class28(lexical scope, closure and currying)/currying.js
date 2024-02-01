function sum(a,b){
    return a+b;
}

let ans = sum(2,3);
console.log(ans);

function fxn(a){
    function gxn(b){
        return a+b;
    }
    return gxn;
}

// let gxn = fxn(2);
// // console.log(gxn); 
// //  gxn = function(b){
// //     return a+b;
// // }
// let result = gxn(3);
// console.log(result);

let result = fxn(2)(3); // currying
console.log(result);

//Partial Application  or partial application
let sumWithTen = fxn(10)
console.log(sumWithTen(5));
console.log(sumWithTen(23));
console.log(sumWithTen(90));
let sumWithFour = fxn(4);
console.log(sumWithFour(9));
console.log(sumWithFour(5));


// Question 1

// Multiply(2)(3)(3) => 18 , make use of function currying

// function Multiply(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }

// console.log(Multiply(2)(3)(3));

// Question 2 - >

// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2



// Question - 3

// Infinite currying

// write an add function which can add values like this

// add(2)(3)(4)(5)......()
