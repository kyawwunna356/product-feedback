const aysncHandler = require('express-async-handler')
const validator = require('validator')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createToken = (id) => {
    const token = jwt.sign({id},process.env.SECREt,{expiresIn: '3d'})
    return token
}



//login
const register = aysncHandler(async (req,res) => {
    const {username,email,password} = req.body
    
    //check all feilds are filled
    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please fill out all the fields')
    }


    //check email is valid
    if(!validator.isEmail(email)){
        res.status(400)
        throw new Error('Email is invailid')
    }

    //check if user already exists
    const exist = await User.findOne({email})
    if(exist) {
        res.status(400)
        throw new Error('Email already exists')
    }

    //check password strength
    if(!(password.length > 8)) {
        res.status(400)
        throw new Error('password must be greater than 8 chars')
    }


    //hash the password
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password,salt)

    
    const user = await User.create({username,email,password : hash})
    const token = createToken(user.id)
    res.status(201).send({email: user.email, username: user.username,token})
})


//login
const login = aysncHandler(async (req,res) => {
    const {email,password} = req.body
    
    //check all feilds are filled
    if(!email || !password){
        res.status(400)
        throw new Error('Please fill out all the fields')
    }

    //check email is valid
    if(!validator.isEmail(email)){
        res.status(400)
        throw new Error('Email is invailid')
    }

    //check if there is a user
    const user = await User.findOne({email})
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    
    //check if the password matches
    const verify = await bcrypt.compare(password,user.password)
    if(!verify){
        res.status(400)
        throw new Error('Invalid Credentials')
    } 
    

    //create token and send back
    const token = createToken(user.id)
    res.status(200).send({_id:user.id,email: user.email, username: user.username,token})
    
})


module.exports = {
    register,
    login
}


