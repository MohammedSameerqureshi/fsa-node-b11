import express from "express";
import defaultRouter from "./routes/defaultRoute.js"
import booksRouter from "./routes/booksRoute.js" 
import courseRouter from "./routes/courseRoute.js";
import mongoose from "mongoose";
const app = express();

app.listen(5000, () => console.log("Server is Up and Running"));

mongoose
.connect("mongodb://localhost:27017/firstprj")
.then(() => console.log("DB Connected Successfully!"))
.catch((err)=> console.log(err))

app.use(express.json());

// let books = [
//     {id: 1, title: "KRRISH", author: "Rakesh Roshan"},
//     {id: 2, title: "DHOOM", author: "kARAN JOHAR"},
//     {id: 3, title: "VEER", author: "SALMAN KHAN"},
//     {id: 4, title: "TITANIC", author: "JAMES CAMERON"},
// ]

app.use("/", defaultRouter);

app.use("/books", booksRouter);
app.use("/courses",courseRouter)

// HTTP METHODS - GET , POST , PATCH , PUT , DELETE 

// http://localhost:5000/users/getUsersList
// http://localhost:5000/users/addUsers
// http://localhost:5000/users/updateUsers
// http://localhost:5000/users/deleteUsers

