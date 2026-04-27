const express = require("express");
const app = express();
const cookie = require("cookie-parser")
app.use(cookie());
app.get("/setcookie", (req, res) => {
    res.cookie("name","secFb",{maxAge : 24*60*60*1000 , httpOnly :true , secure : false});
    res.send("cookies is setup");
});
// name , containt/value , {expire/maxage , other}  
// get 
app.get("/get-cookie",(req,res)=>{
    const data = req.cookies.name;
    if(data) res.send(data);
    else res.send("cookies bna le phle");
})

//delete
app.get("/clearcookie",(req,res)=>{
    res.clearCookie("name");
    res.send("cookies cleared");
})
app.listen(8000);