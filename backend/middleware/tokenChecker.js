const tokenChecker = (req,res,next) => {
    const {authorization} = req.headers
    console.log(authorization)
    next()
    // if(!authorization || authorization.startsWith(''))
}