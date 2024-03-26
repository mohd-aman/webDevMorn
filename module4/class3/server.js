const express = require('express');
const fs = require('fs');
const PORT = 8082;

const app = express();

const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const products = data.products;

app.use(express.json()) // parses incoming requests with JSON 

app.get('/',(req,res)=>{
    res.send("Welcome to dummy json data");
})

//get all the products
app.get('/products',(req,res)=>{
    res.send(products);
})


//get single product with specified id
app.get('/products/:id',(req,res)=>{
    const id = req.params.id
    const product = products.find((elem)=>elem.id == id); 
    res.send(product);
})

//add a product
app.post('/products',(req,res)=>{
    // console.log(req.body);
    const productToAdd = req.body;
    products.push(productToAdd);
    res.send("Product added");
})

//delete a product
app.delete('/products/:id',(req,res)=>{
    const id = req.params.id
    const productIndex = products.findIndex((elem)=>elem.id == id);
    products.splice(productIndex,1);
    res.send("Product deleted");
})

//updating the existing key value pair, either adding new or deleting existing
app.put("/products/:id",(req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex((elem)=>elem.id == id);
    products[productIndex] = req.body;
    console.log(req.body);
    res.send("product updated")
})

//updating the existing value corresponding the the key
app.patch('/products/:id',(req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex((elem)=>elem.id == id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.send("Updated product")
})


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})