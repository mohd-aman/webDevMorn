const fs = require('fs');

// console.log(fs);

//Read, Write, Update and Delete a file using fs module.

//write into a file, if it exists overwrite else create new one and put data to it.
// fs.writeFileSync('f1.txt','Hey, I am data of file one and f1 already exists')

//read
// let contentOfFile1 = fs.readFileSync('f1.txt');
// console.log(contentOfFile1+"");

//update
// fs.appendFileSync('f1.txt'," want to append something")

//delete
// fs.unlinkSync('f1.txt');

//check if file or directory exist

const doesExist = fs.existsSync('myDirectory')
console.log(doesExist);

if(!fs.existsSync('myDirectory2'))
    fs.mkdirSync('myDirectory2'); // creating a directory

if(fs.existsSync('myDirectory'))
    fs.rmdirSync('myDirectory');
