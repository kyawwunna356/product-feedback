const express = require('express')
require('dotenv').config()
const feedbackRoutes = require('./routes/feedbackRoutes')
const authRoutes = require('./routes/authRoutes')
const {  mongoose } = require('mongoose')
const connect = require('./connectDb')
const errorHandler = require('./middleware/errorHandler')
const categoryRoutes = require('./routes/categoryRoutes')

const cors = require("cors");

//-----------------------------------------------------------------------------
//cors

const whitelist = ["http://localhost:3000","http://localhost:3001"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};
//initialize app
const app = express()

//connect express app to mongodb and start the server
connect(app)


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions));



//routes
app.use('/api/feedbacks',feedbackRoutes)
app.use('/api/users',authRoutes)
app.use('/api/categories',categoryRoutes)


//error handling middleware
app.use(errorHandler)



