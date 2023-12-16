let arr = [1,2,3,4,6,7];

// function sumOfArray(arr){
//     let res = 0;
//     for(let i=0;i<arr.length;i++){
//         res = res + arr[i]
//     }
//     return res;
// }


// let sum = sumOfArray(arr);
// console.log(sum)

let sum = arr.reduce(function(accumulator,ele){
    return accumulator = accumulator + ele;
})

console.log(sum);