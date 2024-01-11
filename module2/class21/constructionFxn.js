//Q. Write a construction function for a Person having name and age property

function Person(name,age){
    this.name = name,
    this.age = age;
}

let obj = new Person('Aman','no idea');
console.log(obj);
let obj2 = new Person("Starc",'32')
console.log(obj2);