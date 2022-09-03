const aysncHandler = require('express-async-handler')
const { default: mongoose } = require('mongoose')
const Feedback = require('../models/Feedback')

//get all feedbacks
const getAllfeedbacks = aysncHandler(async (req,res) => {
    const user = req.user 
    console.log(user)
    console.log(user.id)
    const feedbacks = await Feedback.find({userId: user.id})
    res.status(200)
    res.json(feedbacks)
})


//get a single feedback
const getSingleFeedback = aysncHandler(async (req,res) => {
    const {id} = req.params

    //check if mongo id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400)
        throw new Error('Invalid Mongo_Id')
    }

     //find the specific feedback
    const feedback = await Feedback.findOne({id})
    if(!feedback){
        res.status(400)
        throw new Error('Goal not found')
    }

    res.status(200)
    res.json(feedback)
})


//add a feedback
const addFeedback = aysncHandler(async (req,res) => {
   const {title,category,detail} = req.body
   
   //check the fields 
   if(!title || !category || !detail){
    res.status(400)
    throw new Error('Please fill out all the fields')
   }

   const user = req.user
   const feedback = await Feedback.create({title,category,detail,userId: user.id})
   res.status(200)
   res.json(feedback)
   
})


//update feeedback
const updateFeedback = aysncHandler(async (req,res) => {
    const {id} = req.params
    const {title,category,detail} = req.body
    
    //check the fields 
    if(!title || !category || !detail){
        res.status(400)
        throw new Error('Please fill out all the fields')
       }
    //check if mongo id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400)
        throw new Error('Invalid Mongo_Id')
    }
    
    //find the specific feedback
    const exists = await Feedback.findOne({id})
    if(!exists){
        res.status(400)
        throw new Error('Goal not found')
    }

    const feedback = await Feedback.findByIdAndUpdate(id,{title,category,detail})
    res.status(200)
    res.json(feedback)
})


//delete feedback
const deleteFeedback = aysncHandler(async (req,res) => {
    const {id} = req.params
    
    //check if mongo id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400)
        throw new Error('Invalid Mongo_Id')
    }
    
    //find the specific feedback
    const exists = await Feedback.findOne({id})
    if(!exists){
        res.status(400)
        throw new Error('Goal not found')
    }

    const feedback = await Feedback.findByIdAndRemove(id)
    res.status(200)
    res.json(feedback)
})

module.exports = {
    getAllfeedbacks,
    getSingleFeedback,
    updateFeedback,
    addFeedback,
    deleteFeedback
}