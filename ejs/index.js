const express = require('express');
const app =  express();
app.set("view engine","ejs");
// there is 5 types of middleware function in express : application level 
// , router level , error handling , built in and third party middleware function
app.use((req,res,next) =>{ //middleware function
    console.log("middleware 1 is called");
    req.name = "nitin";
    next();
})
app.use((req,res,next) =>{
    console.log("middleware 2 is called",req.name);
    // req.name = "nitin";
    next();
})
// let student = {
//     name : "nitin",
//     age : 22,
//     city : "delhi",
//     email : "nitin@gmail.com",
//     hobby : ["coding" , "xzc" , "fsf" , " ewwefsdc"]
// }
app.get("",(req,res) =>{
    res.render("home" ,{student : student});
})

app.listen(8000);

// ejs is a templating engine for node js which is used to render dynamic content on the web page .
//  it is used to create dynamic web pages by using simple syntax . it is easy to learn and use .
//  it is also used to create reusable components . it is also used to create partials which are used to 
// include common code in multiple pages . it is also used to create layouts which are used to define the 
// structure of the web page . it is also used to create helpers which are used to define custom functions that
//  can be used in the templates .