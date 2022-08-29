const errorHandler = (err,req,res,next) => {
    res.statusCode = (res.statusCode >=400 && res.statusCode <= 499) ? res.statusCode : 500
    res.status(res.statusCode)
    res.json({error: err.message})
    next()
}

module.exports = errorHandler