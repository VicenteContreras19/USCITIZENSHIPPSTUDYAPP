import { config } from "dotenv";
import express, { response } from 'express' 
import connectDB from "./config/db.js";
import publicRoutes from './routes/publicRoutes.js'


config({path: 'src/config/.env'})



const app = express()
const PORT = process.env.PORT || 8000


connectDB()



app.use(express.static('src/public'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))



// 
app.set('view engine', 'ejs')
app.set('views' ,'src/views')

//routes
app.use('/', publicRoutes), 



app.listen(PORT, console.log(`Server is now running on port ${PORT} 👉 http://localhost:8000/`))