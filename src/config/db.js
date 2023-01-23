import mongoose from "mongoose";


const connectDB = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_KEY)
    .then(res=> res && console.log('connected to database'))
    .catch(err => console.log(err))
    }

    export default connectDB

    