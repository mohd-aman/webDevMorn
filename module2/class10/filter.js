let myArr = [1, 2, 5, 7, 8, 2, 6, 9, 13, 17]

// function filterArr(myArr){
//     let result = [];
//     for(let i=0;i<myArr.length;i++){
//         if(myArr[i]%2 == 0){
//             result.push(myArr[i]);
//         }
//     }
//     return result;
// }

// let evenArr = filterArr(myArr);
// console.log(evenArr)

function logic(elem){
    return elem%2 == 0;
}

let evenArray = myArr.filter(logic);
console.log(evenArray);

let oddArray = myArr.filter(function(elem){
    return elem%2 != 0;
})
console.log(oddArray);


// Problem Statement
// You are given a transaction array, and use a filter to find the positive transaction amounts

// const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];

// const creditedTransactions = transactions.filter(function(amount){
//     return amount>0;
// })
// console.log(creditedTransactions);

// Problem Statement Homework
// You are given an array of numbers and you need to calculate the sum of all the elements of an array.

