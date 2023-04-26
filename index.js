const express = require('express')
const app= express()
const path =require('path')


app.use(express.static(path.join(__dirname,'assets')))
app.use(express.static(path.join(__dirname,'images')))



app.set('view engine','ejs')
app.set('views','views') //default

app.use(('/',require('./routes/home.routes')))
app.use(('/',require('./routes/product.routes')))


app.listen(3000,()=>{
    console.log(`server running on port 3000 `)
})