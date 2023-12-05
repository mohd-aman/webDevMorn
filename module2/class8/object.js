// //empty object 
// var obj = {};
// console.log(obj)

// var person = {
//     name:'Alex',
//     age:45,
//     isMale:true,
//     9:'some random value'
// }
// console.log(person);

// //dot notation
// //in dot notation whatever you write after . is treated as string.
// console.log(person.name); //dot notation converts it into string then checks in object
// console.log(person.age);

// //bracket notation
// console.log(person["age"]);

// var c = "name"

// // console.log(person[c]); //it will treat c as a variable 
// console.log(person.c); // it will c as a string and try to find out in object c as a key


var capAmerica = {
    name: 'Steve Rogers',
    age:999999,
    friends:["Bucky","Tony","Natasha","Thor","Bruce"],
    address:{
        country:"USA",
        city:{
            state:"Brooklyn",
            pincode:234135
        }
    },
    isAvenger:false
}

console.log(capAmerica.name);
console.log(capAmerica.friends);
console.log(capAmerica.friends[0]);
console.log(capAmerica["friends"][0])
console.log(capAmerica.address);
console.log(capAmerica.address.country)
console.log(capAmerica.address.city);
console.log(capAmerica.address.city.state);

//update the object 
capAmerica.isAvenger = true
console.log(capAmerica);

//delete the object

delete capAmerica.age
console.log(capAmerica);

capAmerica.movies = ['First Avenger','Endgame','Civil War']
console.log(capAmerica);