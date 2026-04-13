const express = require('express');
const app = express();
const errorhandler = require("./middleware/errorhandler");


app.get("/",(req,res)=>{
    res.send("welcome to home page");
});

app.use((req,res,next) =>{
    const error = new Error("page not found");
    error.statusCode = 404;
    error.status = "fail";
    next(error);
});

app.use(errorhandler);
app.listen(8000);