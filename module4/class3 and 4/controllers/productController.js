const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const products = data.products;

const getAllproducts = (req,res)=>{
    res.send(products);
}

const getSingleProduct = (req,res)=>{
    const id = req.params.id
    const product = products.find((elem)=>elem.id == id); 
    res.send(product);
}

const addProduct = (req,res)=>{
    // console.log(req.body);
    const productToAdd = req.body;
    products.push(productToAdd);
    res.send("Product added");
}

const deleteProduct = (req,res)=>{
    const id = req.params.id
    const productIndex = products.findIndex((elem)=>elem.id == id);
    products.splice(productIndex,1);
    res.send("Product deleted");
}

const replaceProduct = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex((elem)=>elem.id == id);
    products[productIndex] = req.body;
    console.log(req.body);
    res.send("product updated")
}

const updateProduct = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex((elem)=>elem.id == id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.send("Updated product")
}

module.exports = {
    getAllproducts,
    getSingleProduct,
    addProduct,
    deleteProduct,
    updateProduct,
    replaceProduct
}
