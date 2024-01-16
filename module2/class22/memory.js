//primitive
// let a = 10;
// let b = 20;
// b = a; // b = 10; a = 10;
// b = 30;// b = 30; a = 10;
// console.log(a);
// console.log(b);

//reference

// let obj1 = {
//     name:"Alex"
// }
// //obj1 -> Alex
// let obj3 = {
//     name:'Starc'
// }
// //obj1 -> Alex
// //obj3 -> Starc

// let obj2 = obj1;

// // obj1, obj2 -> Alex
// // obj3 -> Starc
// obj2.name = "Adam";

// // obj1, obj2 -> Adam
// // obj3 -> Starc

// obj2 = obj3;

// // obj1 -> Adam
// // obj2, obj3 -> Starc

// obj3.name = "Hales"
// // obj1 -> Adam
// // obj2, obj3 -> Hales

// console.log(obj1); // Adam
// console.log(obj2); // Hales
// console.log(obj3); // Hales


//shalow vs deep copy

// let obj1 = {name:"Alex",
//             age:24,
//             address:{
//                 state:"Delhi",
//                 picode:13284
//             }
//         };

// // let obj2 = {...obj1}; // created a shallow copy
// let obj2 = Object.assign({},obj1); // created a shallow copy

// obj1.name = "Adam";
// obj1.address.state = "BLR"

// console.log(obj1);
// console.log(obj2);


// Deep Copy
// let obj1 = {
//     name:"Adam",
//     batch:"June Batch",
//     address:{
//         city:"New york",
//         pincode:24343
//     }
// }

// let stringObj1 = JSON.stringify(obj1);
// let obj2 = JSON.parse(stringObj1);

// obj2.name = "Alex"
// obj2.address.city = "LA";

// console.log(obj1);
// console.log(obj2);


//Questions for practice

let obj = {
    name:"Adam",
    friends:["Alex","Tim","Carl"],
    address:{
        city:"Delhi",
        pincode:234540,
        bornPlace:{
            village:"No idea",
            pincode:353530
        }
    }
}

let obj5 = obj;

let obj7 = {...obj};

let obj8 = JSON.parse(JSON.stringify(obj));

obj8.friends = ["No one"]
obj8.address.bornPlace.village = "don't know"

obj7.address.city = "LA"
obj7.name = "Alex"

obj5.name = "Hales";
obj5.address.city = "New York"

console.log(obj);
console.log(obj5)
console.log(obj7)
console.log(obj8);


