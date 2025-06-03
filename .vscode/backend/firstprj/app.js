import express from "express";
import defaultRouter from "./routes/defaultRoute.js"
import booksRouter from "./routes/booksRoute.js" 
const app = express();

app.listen(5000, () => console.log("Server is Up and Running"));
app.use(express.json());

// let books = [
//     {id: 1, title: "KRRISH", author: "Rakesh Roshan"},
//     {id: 2, title: "DHOOM", author: "kARAN JOHAR"},
//     {id: 3, title: "VEER", author: "SALMAN KHAN"},
//     {id: 4, title: "TITANIC", author: "JAMES CAMERON"},
// ]

app.use("/", defaultRouter);

app.use("/books", booksRouter);

// HTTP METHODS - GET , POST , PATCH , PUT , DELETE 

// http://localhost:5000/users/getUsersList
// http://localhost:5000/users/addUsers
// http://localhost:5000/users/updateUsers
// http://localhost:5000/users/deleteUsers

