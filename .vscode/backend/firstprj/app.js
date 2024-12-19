import http from "http"
import path from "path"
// const require = require("http");
import "./module.js"

const server = http.createServer((req, res) => {
  console.log(path);
// const controller = (req , res) => {
    // console.log(req.url);
    //  res.statusCode = 400;
    // res.end("hello world")

   if(req.url.includes("welcome")) {
      res.statusCode = 200;
      res.end("Welcome to my backend server");
   } else {
    res.statusCode = 404;
    

    res.end()
   }
});


server.listen(5000, () => console.log("Server is UP & Running"));
