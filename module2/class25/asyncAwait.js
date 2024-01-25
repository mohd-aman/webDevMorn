let fs = require('fs');

// async function will always returns a promise 
// async function gxn(){
//     console.log('4');
//     let f1Data = await fs.promises.readFile('f1.txt');
//     console.log(f1Data+"");
//     console.log("0");
//     let f2Data = await fs.promises.readFile('f2.txt');
//     console.log(f2Data+"");
//     console.log('5');
// }

// console.log('1');
// gxn();
// console.log('2');


async function fxn(){
    console.log("0");
    let a = await "3";
    console.log(a);
    console.log('6')
}

console.log('1');
fxn();
console.log('7');