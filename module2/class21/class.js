
class Person{
    constructor(name,age){ // when we create an object for class, constructor method gets invoked
        this.name = name; // this will register all properties your object will have.
        this.age = age;
    }

    //Prototype method
    greet(){
        console.log(`Hello my name is ${this.name}, How are you? `)
    }

    //static methods
    // static details(){
    //     console.log("This class describe name, age and greeting for a person");
    // }

    static compareAges(person1,person2){
        if(person1.age>person2.age){
            return `${person1.name} is older than ${person2.name}`
        }else if(person2.age>person1.age){
            return `${person2.name} is older than ${person1.name}`
        }else{
            return `Both are of same age`;
        }
    }
}
//calling an static method
// Person.details();

//Inheritance -> The process of one class taking properties from other class known as inheritance
class Student extends Person{ // Student class will inherit from Person class.
    constructor(name,age,batch){
        super(name,age); //we are invoking the constructor method of parent in this case of Person.
        this.batch = batch;
    }
}

class Teacher extends Student{
    constructor(name,age,batch,classStrength){
        super(name,age,batch);
        this.classStrength = classStrength;
    }
}

let teacher1 = new Teacher("Shambhu","No idea","Academy Dev","100");
console.log(teacher1);
let teacher2 = new Teacher("Tharun","no idea","DSA","200");
console.log(teacher2);

let student1 = new Student("Avinash","No idea","Academy Web");
console.log(student1);
let student2 = new Student("Abraham","node","Academy DSA");
console.log(student2);

let person1 = new Person("Aman",25);
console.log(person1);
let person2 = new Person("Starc",25);
console.log(person2);

person2.greet();
person1.greet();
teacher1.greet();
student1.greet();

console.log(Person.compareAges(person1,person2));