const express = require('express')
require('dotenv').config()
const feedbackRoutes = require('./routes/feedbackRoutes')
const authRoutes = require('./routes/authRoutes')


const app = express()


//routes
app.use('/api/feedbacks',feedbackRoutes)
app.use('/api/users',authRoutes)



app.listen(process.env.PORT, () => {
    console.log('server has started')
})