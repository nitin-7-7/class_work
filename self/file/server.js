/////////////////////lec 11
const { readFile } = require("fs");
const http = require("http");
//http required
const url = require("url");
const fs = require("fs");
//server creteted
const server = http.createServer((req,res) => {
    // manual routing 
    const pathname = req.url;
    /*
    
    if(pathname === '/') res.end("hello from server biroo");
    else if(pathname === '/p') res.end("hello from server biroo its a p page");
    else if(pathname === '/home') res.end("hello from server biroo its a home page");
    else if(pathname === '/about') res.end("hello from server biroo its a about page ");
    else if(pathname === '/lol') res.end("hello from server biroo its a lol page");
    else{
        res.writeHead(404);
        res.end("page not found");
    }
    */
   //                          static routing or manual 
    if(pathname === '/'){
        fs.readFile("C:/web dev/self/routing_file/home.html",(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
                res.end();
            }
        });
    }

    else if(pathname === '/about'){
        fs.readFile("C:/web dev/self/routing_file/about.html",(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
                res.end();
            }
        });
    }
    else if(pathname === '/product'){
        fs.readFile("C:/web dev/self/routing_file/product.html",(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
                res.end();
            }
        });
    }

    else{
        res.writeHead(404);
        res.end("Page Not Found");
    }
    
});
// listen
server.listen(8000,() =>{
    console.log("http://localhost:8000");
})
