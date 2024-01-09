// console.log(this);  {}

// function fxn(){
//     console.log(this);  // global object
// }

// fxn(); //direct/fxn invocation

let obj = {
    name: "Starc",
    age: "No idea",
    sayHello:function(){
        console.log(this); // object itself in case of method invocation.
    }
}

obj.sayHello(); //method invocation

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.sayHello);
let sayHello1 = obj.sayHello;
// console.log(sayHello1);
sayHello1(); //fxn invocation / direct invocation
