const express = require('express')
const { register, login } = require('../controller/authController')

const router = express.Router()

//Register
router.post('/',register)


//login
router.post('/login',login)


module.exports = router
