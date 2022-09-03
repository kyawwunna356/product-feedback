 const Category  = require('../models/Category')
 const aysncHandler = require('express-async-handler')


const getCategories = aysncHandler(async (req,res) => {
    const feedbacks = await Category.find()
    res.status(200)
    res.json(feedbacks)
})


const addCategory =  aysncHandler(async (req,res) => {
    const {name} = req.body
    
    const exist = await Category.findOne({name})
    if(exist) {
        res.status(200)
        throw new Error('Already exist')
    }

    const feedback = await Category.create({name})

    res.status(200)
    res.json(feedback)
})

module.exports = {getCategories,addCategory}