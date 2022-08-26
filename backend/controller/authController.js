const aysncHandler = require('express-async-handler')



//login
const register = aysncHandler(async (req,res) => {
    res.json({msg: 'register'})
})


//login
const login = aysncHandler(async (req,res) => {
    res.json({msg: 'login'})
})


module.exports = {
    register,
    login
}


