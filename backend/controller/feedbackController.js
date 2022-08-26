const aysncHandler = require('express-async-handler')

//get all feedbacks
const getAllfeedbacks = aysncHandler(async (req,res) => {
    res.json({msg: 'get all feedbacks'})
})


//get a single feedback
const getSingleFeedback = aysncHandler(async (req,res) => {
    res.json({msg: 'get single feedback'})
})


//add a feedback
const addFeedback = aysncHandler(async (req,res) => {
    res.json({msg: 'add feedback'})
})


//update feeedback
const updateFeedback = aysncHandler(async (req,res) => {
    res.json({msg: 'update feedback'})
})


//delete feedback
const deleteFeedback = aysncHandler(async (req,res) => {
    res.json({msg: 'delete feedback '})
})

module.exports = {
    getAllfeedbacks,
    getSingleFeedback,
    updateFeedback,
    addFeedback,
    deleteFeedback
}