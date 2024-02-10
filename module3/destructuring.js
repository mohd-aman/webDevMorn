let person = {
    name:"Alex",
    age:"25",
    role:"SDE",
    place:"Delhi",
    salary:"no idea"
}

// let name = person.name; // person['name']
// let age = person.age;
// let role = person.role;
// console.log(name,age,role);

let {name, age, role} = person; // destructuring
console.log(name,age,role);

// let placeOfPerson = person.place;
// console.log(placeOfPerson);
let {place: placeOfPerson} = person;
console.log(placeOfPerson);