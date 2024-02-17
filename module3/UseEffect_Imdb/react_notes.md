## First Principles (Insights)
1. What is the USP of `react` -> it knows how to efficiently manipulate UI in our case it's -> DOM
2. How do you tell React to update the UI -> you use State variable and setting that variable using setState 

## How to approach creation of component(counter)
* what to print -> write the Static UI 
* How you end user is going to interact with your component -> add Event listeners at those points
* how those event handler will tell your react to update the UI -> introduce state var for every changing value in your UI

 **What do you understand by a Single Page Application** : the application that can chnages url but still do not relaod / every thing is done inside one single html page 


 ## Useffect 

 ### Problem statement
 * **Problem** : Send a lot of Data Points to end user : All modern wesbites : have alot of code + resources(images, text data) (Youtube 17 mb load Home Page)
 * **Solution** : Prioritize : 
        * send Load the loader/ dummy template 
        * Then send Resources 

## Lifecycle of a component
* created -> Mounting 
* updation -> Update
* deletion -> Unmount 

After a particular stage in your lifcycle we might need to do something
* I send the UI to frontend -> make request to backned to get resources 

## Requirement 
* after creation/mount -> i want to run some code
* after updation ->  i want to run some code (google doc update )
* after deletion  -> i want to run some code  (disconnect backend db)

## Tech solution -> React -> Useffect
 ways to use  a useEffect
/***
 * 1. useEffect(fn) -> It will execute after render + every state change 
 * 2. useEffect(fn,[])-> It will only excecute once in the lifetime just after render
 * 3. useEffect(fn,[dep]) -> It will only excute after first render and whenever the dep inside your
 * array chnages
 * **/ 






















