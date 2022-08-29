const { default: mongoose } = require("mongoose");

const feedbackSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"]
    },
    category: {
        type: String,
        required: [true, "Please enter a category"]
    },
    detail: {
        type: String,
        required: [true, "Please enter a detail"]
    },
})

const FeedbackModel = mongoose.model('Feedback',feedbackSchema)

module.exports = FeedbackModel