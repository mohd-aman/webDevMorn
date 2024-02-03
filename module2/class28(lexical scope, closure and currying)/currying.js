// function sum(a,b){
//     return a+b;
// }

// let ans = sum(2,3);
// console.log(ans);

// function fxn(a){
//     function gxn(b){
//         return a+b;
//     }
//     return gxn;
// }

// let gxn = fxn(2);
// // console.log(gxn); 
// //  gxn = function(b){
// //     return a+b;
// // }
// let result = gxn(3);
// console.log(result);

// let result = fxn(2)(3); // currying
// console.log(result);

//Partial Application  or partial application
// let sumWithTen = fxn(10)
// console.log(sumWithTen(5));
// console.log(sumWithTen(23));
// console.log(sumWithTen(90));
// let sumWithFour = fxn(4);
// console.log(sumWithFour(9));
// console.log(sumWithFour(5));


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

// function calculate(operation){
//     return function(a){
//         return function(b){
//             if(operation == 'sum'){
//                 return a+b;
//             }else if(operation == 'substract'){
//                 return a-b;
//             }else if(operation == 'multiply'){
//                 return a*b;
//             }else if(operation == 'divide'){
//                 return a/b;
//             }else{
//                 return "Invalid Operation";
//             }
//         }
//     }
// }

// console.log(calculate('sum')(1)(2));
// console.log(calculate('substract')(3)(2));
// console.log(calculate('multiply')(3)(2));
// console.log(calculate('divide')(6)(2));
// console.log(calculate('fjkdla')(5)(2));


// Question - 3

// Infinite currying

// write an add function which can add values like this

// add(2)(3)(4)(5)......()
// add(2)(5)(3)(1)(); //10
// add(1)(1)(1)() // 3
// add(2)(2)(2)(3)(1)() // 10
// add(1)() // 1

// add(2)(3)(4)() -> 9
// add(5)(4)()    -> 9
// add(9)()       -> 9

function add(a){
    return function(b){
        if(b == undefined){
            return a;
        }else{
            return add(a+b);
        }
    }
}

// console.log(add(2)(3)(4)(5)());
// console.log(add(5)(5)(3)(3)(2)(3)(4)(4)(4)(3)());
console.log(add(2)(0)());
