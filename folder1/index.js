const url = require("url");
const fs = require("fs");
const http = require("http");
const server = http.createServer((request,response)=>{
    // response.write("yoo server chal gya");
    // response.end();
    // if(request.url===`/`){        // run time mai asyn function use krte hai 
    //     request.write("helo");
    //     response.end();
    // }
    // by switch
    switch(request.url){
        case `/`: //default
            fs.readFile(`./folder2/h.html`,(err,page)=>{
                if(err){
                    response.end();
                }else{
                    response.write(page);
                    response.end();
                }
            });
        case `/a`:  //about
            fs.readFile(`./folder2/a.html`,(err,page)=>{
                if(err){
                    response.end();
                }else{
                    response.write(page);
                    response.end();
                }
            });
        case `/p`: //product
            fs.readFile(`./folder2/p.html`,(err,page)=>{
                if(err){
                    response.end();
                }else{
                    response.write(page);
                    response.end();
                }
            });
            break;
    }
    console.log(request.url);
}).listen(8000,'localhost',(err)=>{
    if(err) console.log(err);
    console.log("Server Started at http://localhost:8000")
})

//5 to 10 lab exp ==> portal pr manual hoga: