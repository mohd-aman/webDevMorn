let fs = require('fs');

let f1Promise = fs.promises.readFile('f1.txt');

// console.log(f1Promise);
console.log("Hello");

f1Promise.then(function(data){
    console.log(data+"")
})

f1Promise.catch(function(error){
    console.log(error);
})

console.log("Hi")