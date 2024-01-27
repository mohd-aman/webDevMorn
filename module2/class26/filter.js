let arr = [1,2,3,4,5,6,7,8];

Array.prototype.myFilter = function(callback){
    let resultArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            resultArray.push(this[i]);
        }
        // callback = function(ele){
        //     return ele%2 == 0;
        // }
        // this[0] -> 1, callback(1) -> false, resultArray = [], 1st loop 
        // this[1] -> 2, callback(2) -> true,  resultArray = [2], 2nd loop
        // this[2] -> 3, callback(3) -> false, resultArray = [2], 3rd loop
        // ... 
    }
    return resultArray
}

let even = arr.myFilter(function(ele){
    return ele%2 == 0;
})
console.log(even);

// let even = arr.filter(function(ele){
//     return ele%2 == 0;
// })

// console.log(even);