const express = require("express");
const app = express();
//get request
app.get("/", (req,res) => {
    // res.status(200).send("hello from express");
    res.status(200).json({ message: "hello from express" , app : "hlo msg"});
});    
//post request
app.post("/", (req,res) => {
    res.status(200).send("hello from express post request");
});


app.listen(8000, () => {
    console.log("http://localhost:8000");
});

// express is a web framework for node.js that provides a set of features to develop web applications. 
// It is built on top of the http module and provides a more convenient and efficient way to handle HTTP requests and responses. 
// Express allows developers to create routes, handle middleware, and manage server-side logic with ease, making it a popular choice for building web applications in Node.js.