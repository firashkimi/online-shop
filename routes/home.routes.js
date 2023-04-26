const { getHome } =require ('../controllers/home.controller')

const router = require('express').Router()

router.get('/',getHome)

module.exports = router 