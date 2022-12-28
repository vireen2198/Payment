const express=require("express");
const app=express()
const dotenv=require("dotenv").config();
const mainRoute=require("./routes/mainRoute.js");
const port=process.env.PORT||3000
//middlewares

app.use(express.static("public"))
app.use(express.json());
app.use("/",mainRoute);

const start=async ()=>{
    try {
        app.listen(port,()=>console.log(`server started on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()

