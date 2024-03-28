const express = require('express');
const productRouter = require('./routes/productRoutes');

const PORT = 8082;
const app = express();


app.use(express.json()) // parses incoming requests with JSON 

app.use('/products',productRouter);


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})