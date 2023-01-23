import { config } from "dotenv";
import express, { response } from 'express' 
import connectDB from "./config/db.js";
import expressLayouts from "express-ejs-layouts";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import flash from "express-flash";
import router from './routes/index.js'

config({path: 'src/config/.env'})


import'./auth/passport.js'

const app = express()
const PORT = process.env.PORT || 8000


connectDB()

app.use(session({
    secret: 'sdfsdfsdfsdf',
    resave: false, 
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl:process.env.MONGO_KEY })
}))


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cookieParser())
app.use(flash())
app.use(express.static('src/public'))

// 

app.set('view engine', 'ejs')
app.set('views' ,'src/views')

// passport init
app.use(passport.initialize())
//telling passport we're using express-session
app.use(passport.session())

app.use(router)


app.listen(PORT, console.log(`Server is now running on port ${PORT} 👉 http://localhost:8000/`))