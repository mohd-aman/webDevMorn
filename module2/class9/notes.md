
# Execution context in javascript
How the javascript code gets executed.
```javascript=
var a = 2
var b = 3
function add(num1, num2){
    var ans = num1+num2
    return ans;
}
var addition = add(4, 5)
console.log(addition) // print 9
add(addition, 4) 
let add1 = addition(a, b)
let add2 = addition(5, 6)
console.log(add1) // print 5
console.log(add2) // print 11
```

Javascript code executes two phases:
1. **Memory Allocation:** Every particular variable is assigned with undefined value initially. Initially, no value is assigned to the variable, only memory is allocated. And every function will get its whole body in this phase.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/084/original/upload_85139e0f5170f5e8eece1dd1782b44b7.png?1695318758)

2. **Code Execution:** Code will get executed in this phase. Now the values of variables are assigned. When the function is called and it starts executing then another memory allocation, the code block is created. For every function calling, another execution context will be created. And execution context of the whole program is known as the global execution context.
Variables declared inside the function are written inside the execution context of that particular function.


Execution context is created when the function is called and the answer is stored in the add1 variable.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/085/original/upload_1a31012a1e876a8f7c95aa73d0eef002.png?1695318823)

After completing the function execution, a particular function execution context returns the value. And we do not need that function execution context further.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/086/original/upload_d3e7d682244f9386192f25604345466b.png?1695318849)


Now again execution context is created when the add() function is called again and the return value of the function is stored in add2.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/087/original/upload_5d5e478c9528b7fe00cc0b799debdc76.png?1695318906)
After the completion of function execution, there is no requirement for that function execution context.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/088/original/upload_80a8e7c9979b2c4b7e9a6129459cfeca.png?1695318933)

Now the execution of the program is completed, now global function execution context is also not required further.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/089/original/upload_e27ec9b99f9a4fc64569b634d07f2a30.png?1695318988)


**Execution context for the below code**

```javascript=
var n = 3
function square(num){
    var ans = num*num
    return ans
}
let square1 = square(n)
```

- Firstly global execution context will be created.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/090/original/upload_4af9552ee646a0fe31bae98443b75adf.png?1695319026)

- Then the value to the n will be assigned.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/091/original/upload_bdeb77ccd5eed38c0a9afe636098474e.png?1695319049)

- Now execution context is created for the square method as it is called.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/092/original/upload_e409b43de48b1647ec498a5bb8cd358c.png?1695319076)
- Variables declared inside the function are initialized by undefined values in the function execution context.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/093/original/upload_4ee9ea62766996fd53d0645bd52785b3.png?1695319103)

- Now the value will be assigned to the variables of the function execution context.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/094/original/upload_30b10d1997acbd7260a784b6f639b4c2.png?1695319173)

- After that function execution context returns value to the global execution context and the function execution context is not required further.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/095/original/upload_2c00f2a7212c3e93e02fa480dcf396c1.png?1695319197)

- Now the program is executed completely so we do not need global execution context further.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/096/original/upload_fe64e69af8a31efb89e43340574b7b9d.png?1695319220)



# More differences between let, var and const.

```javascript=
var a = 4

function printName(){
    console.log('my name is mrinal')
}
console.log(a)
printName()
```

**Output**
```
4
my name is mrinal
```

```javascript=
console.log(a)
printName()
var a = 4

function printName(){
    console.log('my name is mrinal')
}

```

**Output**
```plaintext
undefined
my name is mrinal
```

**Explanation**
First is the memory allocation phase of the program, and initially all the variables are initialized with undefined values before program execution. In the memory allocation phase, a = undefined and fn printName() will be created. After that program execution phase will start, in which first the value of a printed i.e. undefined after the function is called, function execution context will be created and then the value is assigned to the variable.

```javascript=
console.log(a)
printName()
var a = 4

function printName(){
    console.log('my name is mrinal')
}
let printAge = function(){
    console.log(24)
}
printAge()
```

**Output**
```plaintext
undefined
my name is mrinal
24
```


```javascript=
console.log(a)
printName()
printAge()
var a = 4

function printName(){
    console.log('my name is mrinal')
}
let printAge = function(){
    console.log(24)
}

```

But now this program will give an error that printAge is not defined. We are getting this error as we are working with function as expression and printAge does not have a function during initialization. It has an undefined value during initialization.

**let**
```javascript=
console.log(a)
printName()
let a = 4

function printName(){
    console.log('my name is mrinal')
}
let printAge = function(){
    console.log(24)
}
printAge()
```

This program will give an error at line console.log(a) that `cannot access 'a' before initialization`. This is because let will first initialise your variable with temporal dead zone. Whenever a variable is created with the `let`, then that variable can not be accessed before initialisation means until the code execution phase is not started. Before code execution, it is in a temporal dead zone.



# Temporal dead zone(TDZ)
When you declare a variable with let or const, then these variables can not be accessible before their initialization and at this moment they will be in a temporal dead zone.

||var|let|const|
|:-:|:-:|:-:|:-:|
|TDZ|&cross;|&check;|&check;|



