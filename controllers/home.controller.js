const productModel = require('../models/products.model')

exports.getHome= (req,res)=>{
    //get products
    //render index.ejs

    

    //get category
    // if category && category!== all 
    //          filter
    // else 
    //          render all 
    let category = req.query.category 
    let validCategories = ["clothes,phones,computers"]
    let productPromise

    if(category && validCategories.includes(category)){
        productPromise = productModel.getAllProductsByCategory(category)
    } else {
        productPromise = productModel.getAllProducts()
    }
    productPromise.then(products=>{
        res.render('index',{
            products:products
        })
    })

}