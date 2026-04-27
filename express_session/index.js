const express = require("express");
const session = require("express-session");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
//middleware
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"mykey",
    resave:false,
    saveUninitialized:false,
    MaxAge:2*60*1000 //2min
}))

app.get("/", (req, res) => {
    if(req.session.user){
        return res.redirect("/home");
    }
    res.render("login");
});
//home
app.get("/home",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/");
    }
    res.render("home",{username:req.session.user});
})
//login
app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    req.session.user = username;
    req.session.pass = password;

    res.redirect("/home");
})
//profile
app.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/");
    }
    res.render("profile");

})
//logout
app.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/");
    })
})

app.get(/.*/, (req, res) => {
  res.redirect("/");
});

app.listen(8000);