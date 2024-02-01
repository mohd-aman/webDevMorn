let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price, color) {
    // return this.color
    console.log(`I bought a ${this.color} ${this.name} for ${price} of color ${color} `);
}

let bindedFxn = buyCar.bind(car,10000);
// bindedFxn('red');
// bindedFxn('blue');

Function.prototype.myBind = function(obj, ...args){
    // console.log(this); // it's a buyCar function. 
    // console.log(obj); // { name: 'Mercedes', color: 'White' }
    obj.fxn = this;
    //obj = {
    //     name:"Mercedes",
    //     color:"White",
    //     fxn:function buyCar(){
    //         console.log(`I bought a ${this.color} ${this.name}`);
    //     }
    // }
    // console.log(obj);
    return function(...args2){ // in case of bind returning a function instead of invoking it
       return obj.fxn(...args, ...args2);    // put return in case if anything being returned will return it as it is.
    }
}

let boundedFxn = buyCar.myBind(car,2439879);
// console.log(boundedFxn);
// console.log(boundedFxn());

boundedFxn('red');
boundedFxn('black')
