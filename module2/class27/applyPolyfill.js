let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price,color) {
    console.log(`I bought a ${this.color} ${this.name} for ${price} of color ${color}`);
}

buyCar.apply(car, [100000, 'red']);

Function.prototype.myApply = function(obj, args){
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

buyCar.myApply(car,[20000,'black']);
