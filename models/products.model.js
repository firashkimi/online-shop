const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://firas:firas123@cluster0.7hm7zsb.mongodb.net/online-shop?retryWrites=true&w=majority'

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
})

const Product = mongoose.model('product', productSchema)

exports.getAllProducts = () => {
    // connect to db 
    //get products
    // disconnect 

    return new Promise((resolve, rejected) => {

        mongoose.connect(DB_URI).then(() => {
            return Product.find({})
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => { rejected(err) })
    })

}
exports.getAllProductsByCategory = (category) => {
    // connect to db 
    //get products
    // disconnect 

    return new Promise((resolve, rejected) => {

        mongoose.connect(DB_URI).then(() => {
            return Product.find({category:category})
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => { rejected(err) })
    })
}
exports.getAllProductsById = (id) => {
    // connect to db 
    //get products
    // disconnect 

    return new Promise((resolve, rejected) => {

        mongoose.connect(DB_URI).then(() => {
            return Product.findById(id)
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch(err => { rejected(err) })
    })
}