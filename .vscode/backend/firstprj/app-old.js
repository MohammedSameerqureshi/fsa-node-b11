import http from "http";
// import path from "path";
// import fs from "fs";
// import os from "os";
// const require = require("http");
import add from"./module.js";

 const server = http.createServer((req, res) => {
    //   console.log(path);
    //   console.log(req.body);
    // res.statusCode = 400;
    // res.end("hello world");
    if (req.url.includes("Welcome")) {
        res.statusCode = 200;
        res.end("Welcome to my Backend Server");
    } else {
        res.statusCode = 404;
        res.end();
    }
 }) ;


console.log(add())
server.listen(5000, () => console.log("Server UP & Running"));
