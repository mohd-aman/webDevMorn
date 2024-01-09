'use strict'

console.log(this); // {}

function fxn(){
    // console.log(this); //undefined
    function gxn(){
        console.log(this); //undefined
    }
    gxn(); //function invocation
}

fxn(); //direct invocation/ function invocation

let obj = {
    name:"Stac",
    age:"No idea",
    sayHello:function(){
        console.log(this); //object itself in case of method invocation
    }
}

obj.sayHello(); //method invocation / calling it through object get object itself

let sayHello1 = obj.sayHello;
sayHello1(); // direct invocation/ function invocation we get undefined. 