let arr = [1,2,3,4];

// let squaredArr = arr.map(function(ele){
//     return ele*ele;
// })

// console.log(squaredArr);

//1. what does the method do.
//2. this keyword.
//3. prototype.

console.log(Array.prototype);
// arr = [1,2,3,4];
Array.prototype.myMap = function(callback){
    let resultArray = [];
    //need to invoke callback function for every element of array;
    for(let i=0;i<this.length;i++){
       resultArray[i] = callback(this[i]);

    //    callback = function(ele){
    //                 return ele*ele;
    //             }
    //    this[0] -> 1, callback(1) -> 1, resultArray[0] = 1;  loop 1st
    //    this[1] -> 2, callback(2) -> 4, resultArray[1] = 4;  loop 2nd
    //    this[2] -> 3, callback(3) -> 9, resultArray[2] = 9;  loop 3rd
    //    this[3] -> 4, callback(4) -> 16, resultArray[3] = 16, loop 4th 

    }
    return resultArray;
}

let arr2 = [4,5,7,17,9]

let squaredArr = arr.myMap(function(ele){
    return ele*ele;
})
console.log(squaredArr);