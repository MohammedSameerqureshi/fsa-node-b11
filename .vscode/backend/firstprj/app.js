import http from "http";
// nodeconst require = require("http");

 const server = http.createServer((req, res) => {
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



server.listen(5000, () => console.log("Server UP & Running"));
