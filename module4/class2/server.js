//import the express module
const express = require('express');
// console.log(express);
//create an express application
const app = express();

const loggerMiddleware = (req,res,next)=>{
    // console.log("I am a logger middleware");   
    console.log(req.ip,req.hostname,req.method, req.url);
    const date = new Date();
    console.log(date);
    next(); 
}

const auth = (req,res,next)=>{
    console.log(req.query);
    const password = req.query.pass;
    console.log(password);
    if(password === '123'){
        next();
    }else{
        res.send("You are not the authorized person for the requested url");
    }
}

app.use(express.static('public')) // it will serve index.html file on the '/' get request

//register loggerMiddleware globally for all the routes
app.use(loggerMiddleware);
// app.use(auth);

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

app.post('/data',auth,(req,res)=>{
    res.send("Received a POST req");
})

//start the server
app.listen(8082,()=>{
    console.log("Server has started at 8080");
})