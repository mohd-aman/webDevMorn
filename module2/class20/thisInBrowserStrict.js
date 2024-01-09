'use strict'
console.log(this); //gobal/window object

function fxn(){
    console.log(this); //undefined.
}
fxn(); //function invocation


let obj = {
    name:"Starc",
    age:"no idea",
    sayHello:function(){
        console.log(this);
        // console.log(this.name); 
    }
}

obj.sayHello(); //method invocation -> obj itself

let sayHello1 = obj.sayHello;
sayHello1(); //function invocation -> undefined.