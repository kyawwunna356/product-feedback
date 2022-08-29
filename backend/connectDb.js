const {  mongoose } = require("mongoose")

const connect = async (app) => {
        try {
            await mongoose.connect(process.env.MONGO_URI)
            app.listen(process.env.PORT, () => {
                console.log('server has started')
            }) 
        } 
        catch(error){
            console.log(error)
        }

    } 

module.exports = connect