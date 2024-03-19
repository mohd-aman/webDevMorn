const http = require('http');

const data = {name:"Alex"}

const server = http.createServer((req,res)=>{
    console.log("Server has been started");
    // res.setHeader('Content-Type','text/plain')
    // res.end("Hello world");
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Hello world</h1>")
    // res.setHeader('Content-Type','application/json');
    // res.end(JSON.stringify(data));
})

server.listen(8080)