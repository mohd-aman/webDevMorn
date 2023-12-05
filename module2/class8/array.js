// empty array
// var arr = [];
// console.log(arr);

// var arr = [1,343,564,768]
// console.log(arr);


// var arr = [1,3,'f',"i am a str",true,["jfd",254,'c']]
// console.log(arr);


// console.log(arr[3]);
// console.log(arr[5][1]);

// arr[2] = 'c'
// console.log(arr);

// console.log(arr.length);

var carCollection = ['Urus','Swift','BMW','Audi'];
console.log(carCollection); 
carCollection.push('Benz') // add it to last of array
console.log(carCollection);
carCollection.pop(); // remove from the last
console.log(carCollection);

carCollection.unshift('Ferrari'); // it will add at start
console.log(carCollection);
carCollection.shift(); // remove from start
console.log(carCollection);

// carCollection.splice(1,1) // remove from 1st position and remove 1 element starting from there
// console.log(carCollection);

// carCollection.splice(1,2); //remove from 1st position and remove 2 element starting from there
// console.log(carCollection);

// carCollection.splice(1,1,"Mustang");
// console.log(carCollection);

// carCollection.splice(1,0,'Mustang');
// console.log(carCollection);

carCollection.splice(1,3,'some car')
console.log(carCollection);