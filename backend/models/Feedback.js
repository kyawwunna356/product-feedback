const { default: mongoose } = require("mongoose");

const replySchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    }
})

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
    upvotes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [replySchema],
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports =  mongoose.model('Feedback',feedbackSchema)

