import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./router/webRouter.js"

const app = express()
app.use(express.json())
app.use(cors())


app.use('/',router);
// app.use('/login',router);


app.listen(3001, () => {
    console.log("server is running")
})
mongoose.connect("mongodb://localhost:27017/sekanistore")
.then(()=>{
    console.log("connected to database")
})
.catch((error)=>{
console.log(error.message)
})