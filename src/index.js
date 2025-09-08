//require('dotenv').config({path: './env'}) 
import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.db.js";

dotenv.config({
   path:'./env'
})
const app = express();


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, process.env.HOST,() => {
    console.log(`Server is running at URL:${process.env.HOST}:${process.env.PORT}`)
    app.on("error", (error) => {
      console.log("Failed to listen:", error)
      throw error
    })
  })
})
.catch((err) => {
  console.log("MONGODB connection failed !!!!", err)
})



















//working maybe 
/*
;( async () => {
    try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error
    });

     app.listen(process.env.PORT, process.env.HOST,() => (
      console.log(`App is listening on port ${process.env.HOSt}:${process.env.PORT}`)
     ))

    } catch (error) {
     console.error("ERROR:", error)
     throw err
    }
}) ()

*/