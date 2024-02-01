let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} for ${price}`);
}

buyCar.call(car, 100000);

Function.prototype.myCall = function(obj, ...args){
    console.log(this); // it's a buyCar function. 
    console.log(obj); // { name: 'Mercedes', color: 'White' }
    obj.fxn = this;
    //obj = {
    //     name:"Mercedes",
    //     color:"White",
    //     fxn:function buyCar(){
    //         console.log(`I bought a ${this.color} ${this.name}`);
    //     }
    // }
    // console.log(obj);
    obj.fxn(...args);
}

buyCar.myCall(car,20000);
