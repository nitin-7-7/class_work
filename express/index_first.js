// npn i express = for install express
// npn i epress@next = for install express next version
// npm i express@4.17.1 = for install specific version of express

//notes 
// server bna ne ke need nhi hai  only need port
//restfull api bna ne ke liye express use krte hai 
// resfull => ek specific request ke liye specific response dena
// get => data ko read krne ke liye use krte hai
// post => data ko create krne ke liye use krte hai
// put // or //fetch  => data ko update krne ke liye use krte hai
// delete => data ko delete krne ke liye use krte hai


//routing by express

const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>this is about page</h1><button><a href='/home'></a>HOME PAGE</button>")

})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.get("/home",(req,res)=>{
    res.send("this is home page");
})
app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    //http://localhost:8000/search?name&age=21
    res.send("<h1>this is search reslut</h1>" + req.query.name); //req.query.name => for print query sting
})
//404 for error
app.use((req,res)=>{
    res.status(404).send("page not found");
})

app.listen(8000);