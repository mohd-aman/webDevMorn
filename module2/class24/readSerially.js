let fs = require('fs');

let f1Promise = fs.promises.readFile('f1.txt');

f1Promise.then(function(data){
    console.log(data+"");
    return fs.promises.readFile('f2.txt');
}).then(function(data){
    console.log(data+"")
    return fs.promises.readFile('f3.txt');
}).then(function(data){
    console.log(data+"");
})