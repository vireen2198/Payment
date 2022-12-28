const express=require("express");
const app=express();
require("dotenv").config()


const pageNotFound=async(req,res)=>{
    try { 
        res.status(404).redirect(`${process.env.DOMAIN}/notfound/not-found.html`)
    } catch (error) {
        res.status(500).json({error})
    }

}
module.exports={
    pageNotFound
}