
JavaScript is a dynamically typed, high-level programming language commonly used in web development. It employs the V8 engine, written in C++, for high-performance execution. Despite its name, JavaScript is distinct from Java. Its dynamic nature allows variables to change types during runtime, offering flexibility in coding.
## Datatypes in JS
Certainly, here's the information about JavaScript data types:

**Primitive Data Types:**
1. Number
2. String
3. Null
4. Undefined
5. Boolean

**Non-Primitive Types (Reference Types):**
1. Object
2. Functions
3. Arrays


1. **Numbers:**
   ```javascript
   console.log(5 / 2); // Output: 2.5
   ```
   Explanation: JavaScript performs the division operation, and the result is `2.5`, which is a floating-point number.

2. **Strings:**
   ```javascript
   let age = 25;
   let str1 = 'I am ' + age + " years old ";
   console.log(str1); // Output: I am 25 years old

   let templateString = `I am ${age} years old`;
   console.log(templateString); // Output: I am 25 years old
   ```
   Explanation: In the first part, string concatenation is used to create `str1`. In the second part, a template string with variable interpolation is used to create `templateString`, both resulting in the same output.

3. **Null and Undefined:**
   ```javascript
   let myNull = null;
   let myUndefined;
   
   console.log(myNull); // Output: null
   console.log(myUndefined); // Output: undefined
   ```
   Explanation: `myNull` is explicitly set to `null`, while `myUndefined` is declared but not assigned a value, resulting in `undefined`.

4. **typeof Operator:**
   ```javascript
   var a = 10;
   console.log(typeof a); // Output: number
   a = "string";
   console.log(typeof a); // Output: string
   a = { "name": "Jasbir" };
   console.log(typeof a); // Output: object
   ```
   Explanation: The `typeof` operator is used to determine the data type of the variable `a`. It returns `"number"`, `"string"`, and `"object"` based on the assigned value.

5. **typeof null and Array Check:**
   ```javascript
   console.log(typeof null); // Output: object

   let arr = [1, 2, 3, 4];
   console.log(Array.isArray(arr)); // Output: true
   ```
   Explanation: `typeof null` returns `"object"` (historical quirk), and `Array.isArray()` accurately checks whether `arr` is an array and returns `true`.

These code snippets demonstrate JavaScript's handling of data types and the use of the `typeof` operator and `Array.isArray()` to determine types and check arrays.


---
 ## Non Primitive 
 ### function

Certainly, here's the code snippet related to functions and a brief explanation:

```javascript
// Function Definition
function fn(param1) {
    console.log("Hello world!", param1);
    return "Returned value";
}

// Function Call
let rVal = fn();

console.log("Return value:", rVal);
```

**Explanation:**
1. `function fn(param1)`: This is a function definition named `fn` that takes one parameter `param1`. Inside the function, it logs "Hello world!" along with the value of `param1` and then returns the string "Returned value."

2. `let rVal = fn();`: This line calls the `fn` function without passing any arguments. Since the function expects a parameter, `param1` inside the function will be `undefined`. It also captures the return value of the function in the variable `rVal`.

3. `console.log("Return value:", rVal);`: Finally, it logs the string "Return value:" along with the value of `rVal`, which is "Returned value."

Please note that calling `fn` without passing a value for `param1` will not result in an error, but `param1` will be `undefined` inside the function. If you want to pass a value when calling the function, you should do so like this: `fn("SomeValue");`.

### Objects and JSON

Here's the code snippet related to JavaScript objects and a brief explanation:

```javascript
// Object Definition
let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key: "hello"
}

// Loop through Object Properties
for (let key in cap) {
    console.log(key, " ", cap[key], " ", cap.key);
}
```

**Explanation:**
1. An object in JavaScript is a collection of key-value pairs where the key can be a number or a string, and the value can be any valid JavaScript data type.

2. `cap` is an object that represents an entity, possibly a character named "Steve." It contains properties like `name`, `age`, `isAvenger`, and `key`.

3. The `for...in` loop is used to iterate through the properties of the `cap` object. Inside the loop, `key` represents each property name, and `cap[key]` retrieves the value associated with that property.

4. The `console.log` statement within the loop logs the `key`, the corresponding value accessed using `cap[key]`, and `cap.key`. However, note that `cap.key` accesses the property named "key" specifically, whereas `cap[key]` dynamically accesses the property corresponding to the current `key` in the loop.

5. In JavaScript, you can access object properties using the dot notation (e.g., `cap.name`) or square brackets (e.g., `cap['last Name']`).

6. JSON (JavaScript Object Notation) is a widely used data interchange format that is based on the structure of JavaScript objects. JSON uses a similar syntax for key-value pairs but is typically used for data communication between systems.

This code snippet demonstrates the creation of a JavaScript object, accessing its properties using a loop and dot notation, and the dynamic nature of accessing properties using square brackets.


# Arrays 
The array is a data structure to store multiple values of multiple data types. The elements are stored in an indexed manner.

## Accessing array element
Any array element can be accessed by an index. If we want to access the fifth element of an array named `arr`, then we have to simply write `arr[4]`, as the array works on 0-indexing.

```javascript=
let arr = [1, 'Scaler', true, undefined, null, [1, 2, 3]]
console.log(arr)
// access an element with index from an array
console.log(arr[4]) // print null

let d=arr[5]
console.log(d) // print [1, 2, 3]
console.log(d[0]) // print 1

```

## Changing an array element
We can change the value of any element by its index, if we want to change the value of the fourth element of an array named `arr`, then we need to simply write `arr[3]='new value'`

```javascript=
let arr = [1, 'Scaler', true, undefined, null, [1, 2, 3]]
console.log(arr) // print [1, 'Scaler', true, undefined, null, [1, 2, 3]]
// change an array element to a different value
arr[3] = 'Mrinal'
arr[4] = 700
console.log(arr) //print [1, 'Scaler', true, 'Mrinal', 700, [1, 2, 3]]

```

## Length of an array
Gives the length of the array, length means the total number of elements in an array.

```javascript=
let arr = [1, 'Scaler', true, undefined, null, [1, 2, 3]]
console.log(arr.length) // print 6 as there are a total of 6 elements in an array.

```

## Array methods
**Push Method:**
Inserting an element into an array at the end
```javascript=
let cars = ['swift', 'BMW', 'Audi']
console.log(cars) // print ['swift', 'BMW', 'Audi']
cars.push('Urus')
console.log(cars) // print ['swift', 'BMW', 'Audi', 'Urus']
```

**Pop Method:**
Delete the element from the end of the array
```javascript=
let cars = ['swift', 'BMW', 'Audi', 'Urus']
console.log(cars) // print ['swift', 'BMW', 'Audi', 'Urus']
cars.pop()
console.log(cars) // print ['swift', 'BMW', 'Audi']
```
Popped elements can also be stored in another variable.
```javascript=
let cars = ['swift', 'BMW', 'Audi', 'Urus']
var removedElement = cars.pop()
console.log(removedElement) // print Urus
```

**Unshift Method**
Insert an element at the start of an array(0th index).

```javascript=
let cars = ['swift', 'BMW', 'Audi']
console.log(cars) // print ['swift', 'BMW', 'Audi']
cars.unshift('Urus')
console.log(cars) // print ['Urus', 'Swift', 'BMW', 'Audi']
```

**Shift Method**
Remove the 0th index element of an array.
```javascript=
let cars = ['swift', 'BMW', 'Audi', 'Urus']
console.log(cars) // print ['swift', 'BMW', 'Audi', 'Urus']
cars.shift()
console.log(cars) // print ['BMW', 'Audi', 'Urus']
```

Shifted elements can also be stored in another variable.
```javascript=
let cars = ['swift', 'BMW', 'Audi', 'Urus']
var removedElement = cars.shift()
console.log(removedElement) // print swift
```


# Loops
Loops are used with arrays when we want to perform similar operations on all the elements of an array.

## Example
**Example 1:** To print the square of every element of an array.
```javascript=
let arr = [1, 2, 3, 4, 5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]*arr[i])
}
// print 1 4 9 16 25
```

**Example 2:** Storing the square of every element of an array in another array.
```javascript=
let arr = [1, 2, 3, 4, 5]
let squareArr = []
for(let i=0;i<arr.length;i++){
    squareArr.push(arr[i]*arr[i])
}
console.log(squareArr) // print [1, 4, 9, 16, 25]
```




# Functions
The function is an abstract body and inside that body particular logic is written and that function expects some values which are known as parameters of the function. At the time of invoking the function we need to pass those values as an argument.

**Example of simple function**
```javascript=
// function accepting parameters
function ServeBeverage(drink, quantity){
    console.log('I want '+ quantity + " " + drink)
}
// calling function by passing arguments
serveBeverage('coffee',4) // print I want 4 coffee
```



## Ways of defining function in javascript
In JavaScript, we have multiple ways of defining functions.
### Traditional way of writing function
We can define functions in a way similar used in another programming language for function definition.
```javascript=

function sayHi(){
    console.log('mrinal says hi')
}
// calling function
sayHi()
```

### Function as Expressions(First class citizens)
We can write functions inside the variable in JavaScript. That's why it is known as first-class citizens.
**Example**
```javascript=
// Function as Expressions
let sayHi=function(){
    console.log('mrinal says hi')
}
// calling function
sayHi()
```

### Arrow function
We can write the arrow function even without using the function keyword.
**Example**
```javascript=
// Arrow function
let sayBye=()=>{
    console.log('mrinal says bye')
}
// calling function
sayBye()
```


# Objects
Objects are basically in which data is stored in the form of key-value pairs. 
## Example
```javascript=
let person ={
    name: 'Mrinal',
    age: 24,
    phone: 1234567
}
console.log(person)
// dot notation
console.log(person.age)
// bracket notation
console.log(person['phone'])
```

We can store any kind of value in an object. We can also write a function inside the object using `:`. Another object can also be created within the object.

```javascript=
let captainAmerica ={
    name : 'Steve Rogers',
    age : 102,
    // Array
    allies : ['Tony', 'bruce', 'bucky']
    // function inside an object
    sayHi : function(){
        console.log('Captain says hi')
    }
    // nested object
    address :{
        country : 'USA',
        city : {
            name : 'Brokkly',
            pincode : 12345
        }
    }
    isAvenger : true
}
// accessing age from captainAmerica object
console.log(captainAmerica.age)  // print 102
// accessing element of array allies from captainAmerica object
console.log(captainAmerica.allies[1]) // print bruce
// accessing element from the nested object
console.log(captainAmerica.address.city) // print complete city object
console.log(captainAmerica.address.city.pincode) // print 12345

// changing some values of an object
captainAmerica.isAvenger=false

// adding new key-value in object
captainAmerica.movies=['End Game', 'Age of Ultorn', 'Civil War']
//The above statement will create a key with movies if it is not available in the object otherwise it will update the previous value of movies.


// calling function defined within an object
captainAmerica.sayHi()


//Deleting key from an object

delete captainAmerica.age
```