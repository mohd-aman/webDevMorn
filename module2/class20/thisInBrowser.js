console.log(this); //global/window object

function fxn(){
    console.log(this); //global/window object
}

fxn(); //direct/function invocation


let obj = {
    name:"Starc",
    age:"no idea",
    sayHello:function(){
        // console.log(this);
        function gxn(){
            console.log(this);
        }
        gxn();
    }
}

obj.sayHello();//method invocation will get obj itself

let sayHello1 = obj.sayHello;
sayHello1(); //function invocation. will get global/window object.