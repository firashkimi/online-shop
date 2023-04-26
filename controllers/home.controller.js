const productModel = require('../models/products.model')

exports.getHome= (req,res)=>{
    //get products
    //render index.ejs

    productModel.getAllProducts().then(products=>{
        res.render('index',{
            products:products
        })
    })

}