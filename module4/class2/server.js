//import the express module
const express = require('express');
// console.log(express);
//create an express application
const app = express();

// define a route
app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.send("<h1>Hello world!</h1>")
    res.send({"name":"Alex"});
})

app.put('/',(req,res)=>{
    res.send({"type":"PUT"});
})

app.post('/',(req,res)=>{
    res.send({"type":"POST"})
})

app.delete('/',(req,res)=>{
    res.send({"type":"DELETE"})
})

app.get('/about',(req,res)=>{
    res.send("This is about page!");
})

app.post('/data',(req,res)=>{
    res.send("Received a POST req");
})

//start the server
app.listen(8082,()=>{
    console.log("Server has started at 8080");
})