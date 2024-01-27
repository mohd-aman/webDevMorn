const name = ["Mark","Steve","John"];
const numbers = [1,2,3,4,5];

//1. what does the method do.
//2. this keyword.
//3. prototype.

// console.log(name);

// console.log(Array.prototype);


//polyfill for forEach method.
Array.prototype.myForEach = function(callback){
    //need to invoke callback function for every element of array;
    console.log(this); // this -> array through which myForEach is invoked
    for(let i=0;i<this.length;i++){
        callback(this[i]); // invoke the callback for each and every element of array;

        // numbers, this = [1,2,3,4,5];

        // callback = function(ele){
        //     console.log(ele+ 2);
        // }

        // this[0] = 1, callback(1) -> 3 - 1st loop
        // this[1] = 2, callback(2) -> 4 - 2nd loop
        // this[2] = 3, callback(3) -> 5 - 3rd loop
        // ... 
    }
}

console.log(Array.prototype);

// numbers.forEach(function(ele){
//     console.log(ele+2);
// })

numbers.myForEach(function(ele){
    console.log(ele+ 2);
})

// name.myForEach(function(ele){
//     console.log("jfdk");
// })