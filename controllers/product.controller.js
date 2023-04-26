const productModel = require('../models/products.model')
exports.getProduct =(req,res)=>{
    // get id 
    // get product 
    // render page 

    let id = req.params.id
    productModel.getAllProductsById(id).then(product=>{
        res.render('product',{
            product:product
        })
    })
}