const jwt = require('jsonwebtoken')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

const tokenChecker = asyncHandler(async (req,res,next) => {
    const {authorization} = req.headers
   
    if(!authorization){
        res.status(400)
        throw new Error('Access Denied')
    }

    if(!authorization.startsWith('Bearer')){
        res.status(400)
        throw new Error('Invalid Token')
    }
    const token = authorization.split(' ')[1]
    const {id} = jwt.verify(token,process.env.SECRET)
   
    const user = await User.findOne({_id:id}).select('-password')
    console.log(user)
    if(!user){
        res.status(400)
        throw new Error('User not Found')
    }
    req.user = user
    next()
})

module.exports = tokenChecker