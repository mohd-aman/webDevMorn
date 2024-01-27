let arr = [1,2,3,4,5,6,7,8];

Array.prototype.myReduce = function(callback,initialValue){
    let result;
    let startIndex;
    if(initialValue){
        result = initialValue;
        startIndex = 0;
    }else{
        result = this[0];
        startIndex = 1;
    }
    for(let i=startIndex;i<this.length;i++){
        result = callback(result,this[i]);
    }
    // callback = function(accumulator,currentValue){
    //     return accumulator+currentValue;
    // }
    // result-> 0,this[0]->1, callback(0,1)->1, result->1
    // result-> 1,this[1]->2, callback(1,2)->3, result->3
    // result-> 3,this[2]->3, callback(3,3)->6, result->6
    // result-> 6,this[3]->4, callback(6,4)->10,result->10
    // ...
    return result;
}

let sum = arr.myReduce(function(accumulator,currentValue){
    return accumulator+currentValue;
})

// let sum = arr.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue;
// })

console.log(sum);