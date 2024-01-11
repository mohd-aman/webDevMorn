// let obj = {name:"Alex",age:29};
// console.log(obj);
// let obj2 = {name:"Reddy",age:30};
// console.log(obj2);

function Car(name,color){
    this.name = name;
    this.color = color;
    // this.carDetail = function(){
    //     console.log(`It's a ${this.name} and of ${this.color} color`)
    // }
}


Car.prototype.carDetail = function(){
    console.log(`It's a ${this.name} and of ${this.color} color`);
}

let car1 = new Car("Bmw","Red");
console.log(car1)
car1.carDetail();

let car2 = new Car("Ferrari","Black");
console.log(car2);
car2.carDetail();

let car3 = new Car("Lambo","Blue")
console.log(car3)
car3.carDetail();

// Car.prototype.hasOwnProperty = "haha";

console.log(car1.hasOwnProperty)

