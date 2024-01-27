// Q5 Name Initials

// const input = "George Raymond Richard Martin";
// // output = GRRM

// let output = input.split(' ').reduce(function(accumulator,currentValue){
//     return accumulator+currentValue[0];
// },"");
// ["George","Raymond","Richard","Martin"]
// accumulator = "", currentValue = "George", accumulator+currentValue[0] = "G"
// accumulator = "G", currentValue = "Raymond", accumulator+currentValue[0] = "GR"
// accumulator = "GR", currentValue = "Richard", accumulator+currentValue[0] = "GRR"
// accumulator = "GRR", currentValue = "Martin", accumulator+currentValue[0] = "GRRM"

// let output = input.split(' ').map(function(ele){
//     return ele[0];
// }).join("");

// console.log(output);

//   Q2. Given an array of objects users,
//  print user of particular age along with their frequency.

  const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26}, 
    {firstName:"Sachin",lastName:"Tendulkar",age:50}, 
    {firstName:"Sachin",lastName:"Tendulkar",age:50},
  ];


//   ouput ->
//   26 - 2
//   75 - 1
//   50 - 3


// // Q3.Print object having marks greater than 60 and rollNumber greater than 15.

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];


// Q1. Given an array of objects users, print fullname.


// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];



// // Q4 Print the names of students who scored more than 60


// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];