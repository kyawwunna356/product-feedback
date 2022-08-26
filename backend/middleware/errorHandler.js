const errorHandler = (err,req,res,next) => {
    console.log(res.statusCode)
    res.json({error: err.message})
    next()
}