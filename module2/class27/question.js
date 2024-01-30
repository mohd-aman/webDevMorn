//call method

// var obj = {name : 'Amrita' , occupation : 'Software Enginner'}

// function sayHello(age , lastname){
//     console.log(this);
//     return 'Hello ' + this.name + ' ' + this.occupation+  " " + age + " " + lastname
// }

//invoke sayHello function in a way that value of this inside sayHello fxn
// point to/ refere to obj.

// console.log(sayHello(24,'Singh'));

// console.log(sayHello.call(obj,24,'Singh'));
// console.log(sayHello.apply(obj,[24,'Singh']));
// let fxn = sayHello.bind(obj);
// console.log(fxn(25,'Sharma'));
// console.log(fxn(23,'kaur'))


// Q1

// const person = { name: 'Mark' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person,25));

// Q2

// const age = 10;

// var person = {
//     name: "Mark",
//   age: 20,
//   getAge: function(){
//     console.log(this);
//     return this.age;
//   }
// }

// var person2 = {age:  24};

// console.log(person.getAge());
// console.log(person.getAge.call(person2));
// console.log(person.getAge.call(this)); // context you are setting is empty object


// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };
//   console.log(data.getStatus());
// }, 0);

// Q4

const animals = [
  { species: "Lion", name: "King" },
  { species: "Tiger", name: "Queen" },
];

function printAnimals(i) {
    console.log(this); //{ species: 'Lion', name: 'King' }
    this.print = function () {
        console.log("#" + i + " " + this.species + ": " + this.name);
    };
    console.log(this);
    this.print();
}

// printAnimals.call(animals[0],0);
// printAnimals.call(animals[1],1);

for(let i=0;i<animals.length;i++){
    printAnimals.call(animals[i],i);
}

//output = #0 Lion King
//         #1 Tiger Queen

