// let bmwCar = {
//     name:"Bmw",
//     color:"Red",
//     topSpeed:'300km/h'
// }

// let ferrariCar = {
//     name:"Ferrari",
//     color:"Black",
//     topSpeed:'250km/h'
// }

// let lamboCar = {
//     name:"Lambo",
//     color:"Blue",
//     topSpeed:'310km/h'
// }

function Car(name_of_car,color_of_car,top_speed_of_car){
    // console.log(this); // a new empty obj is created and this->{}
    this.name = name_of_car; // {name:'BMW'}
    this.color = color_of_car;// {name:'BMW',color:'Red'}
    this.top_speed = top_speed_of_car;//{name:"BMW",color:'Red',top_speed:'300km/h'}
    //by default it returns 'this' keyword which
    //is newly created obj, this -> {name:"BMW",color:'Red',top_speed:'300km/h'}
}

let bmwCar = new Car("BMW","Red","300Km/h");
console.log(bmwCar);

let ferrariCar = new Car("Ferrari","Black","250km/h")
console.log(ferrariCar);

let lamboCar = new Car("Lambo","Red","310km/h");
console.log(lamboCar)