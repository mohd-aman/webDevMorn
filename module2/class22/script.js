// function Car(name,color){
//     this.name = name;
//     this.color = color;
//     // this.getDetail = function(){
//     //     console.log("Car name is "+ this.name + " and of "+ this.color + " color")
//     // }
// }

// Car.prototype.getDetail = function(){
//     console.log("Car name is "+ this.name + " and of "+ this.color + " color")
// }

// let bmwObj = new Car("BMW",'Red')
// console.log(bmwObj);
// bmwObj.getDetail();

// let car2Obj = new Car("Ferrari","Black");
// console.log(car2Obj);
// car2Obj.getDetail();


let person1 = {
    name:"Tharun",
    age: "No idea",
    sayHello:function(batch1,batch2,batch3){
        this.batch1 = batch1;
        this.batch2 = batch2;
        this.batch3 = batch3
        console.log("Value of this keyword ", this);
    }
}

person1.sayHello("July Batch","Dec Batch"); // method invocation

let person2 = {
    name:"Aman",
    age:"25"
}


// person1.sayHello=function(){
//     console.log("value of this keyword", this)
// }

// person1.sayHello.call(person2)

// person1.sayHello.call(person2,"Jan Batch","March Batch")

let batches = ['June Batch','July Batch','Dec Batch'];
// person1.sayHello.call(person2,batches[0],batches[1],batches[2]);

//apply
// person1.sayHello.apply(person2,batches);

//bind
let sayHelloToPerson2 = person1.sayHello.bind(person2); // it returns a fxn
sayHelloToPerson2("batch feb",'batch mar','batch dec');
// sayHelloToPerson2();
// sayHelloToPerson2();

let pesron3 = {
    name:"Mohanraj",
    age:"no idea"
}

// person1.sayHello.call(pesron3);
// person1.sayHello.call(pesron3,"Aug Batch","Feb Batch")


