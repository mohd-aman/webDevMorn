const express = require('express');
const {getAllproducts,getSingleProduct,
    addProduct,deleteProduct,
    updateProduct,replaceProduct} = require("../controllers/productController");

const router = express.Router();

//get all the products
router.get('/',getAllproducts)

//get single product with specified id
router.get('/:id',getSingleProduct)

//add a product
router.post('/',addProduct)

//delete a product
router.delete('/:id',deleteProduct)

//updating the existing key value pair, either adding new or deleting existing
router.put("/:id",replaceProduct)

//updating the existing value corresponding the the key
router.patch('/:id',updateProduct)

module.exports = router;