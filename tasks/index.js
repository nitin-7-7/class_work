// require("./m1");
// require("./m2");

// (function(){  // module wrapper function : ye hota hai jab hum koi file require karte hai to uske andar ka sara
//  code ek function ke andar wrap ho jata hai jiska naam hota hai module wrapper function
//     let name = `harry`;
//     console.log(name);
// })();

// (function(){
//     let name = `garry`;
//     console.log(name);
// })();

// day 2 :  6 feb  ( sync & async code time consuming  )

// const crypto = require("crypto");
// const beforeExe = Date.now();

//sync code
// crypto.pbkdf2Sync("passwordwertyudfghjkhgfghjjiklkjhgfc", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("passwodfghjuiuygfdfghjkrd", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("passwofghjhgfghjhgfgrd", "salt", 100000, 512, "sha512");

// console.log("1 : ", Date.now() - beforeExe);// take 345ms to execute

//async code
// crypto.pbkdf2("passwordwertyudfghjkhgfghjjiklkjhgfc", "salt", 100000, 512, "sha512", () => {
//     console.log("1 : ", Date.now() - beforeExe);
// });
// crypto.pbkdf2("passwordc", "salt", 100000, 512, "sha512", (err,ans) => {
//     if(err) throw err;
    
// }); 
`
for(let i=0; i<100; i++){
    // console.log(i);
    crypto.pbkdf2("passwordc", "salt", 100000, 512, "sha512", (err,ans) => {
    if(err) throw err;
    
}); // just take 3 ms to execute
}

 console.log("1 : ", Date.now() - beforeExe);`


 //liveuv :  is a library that provides an event loop and asynchronous I/O operations. 
 // It is used by Node.js to handle asynchronous tasks efficiently.
 //  The event loop allows Node.js to perform non-blocking I/O operations, 
 // which means that while one operation is being processed,
 //  other operations can continue without waiting for the first one to complete.
 //  This is why the asynchronous code in the example takes
 //  much less time to execute compared to the synchronous code.


///////////////////////////////////////////////////////////////////////////////////
//EVENTS MODULE : 

const Event = require("events");
const eventEmitter = new Event.EventEmitter(); 
const http = require("http");

// function eventhandler(){
//     console.log("event occurred");
// }

eventEmitter.on("evnt", ()=>{  // event listener : on method is used to listen for an event
    console.log("event ho gya " );
});

eventEmitter.emit("evnt"); //object that emits an event : emit method is used to trigger an event
eventEmitter.emit("evnt"); // we can emit the same event multiple times

//////////////////////////////////////////////
const server = http.createServer();
server.on("request", (req,res) => { // request event : jab bhi koi request aati hai to ye event trigger hota hai
    console.log("request received");
    res.end("hello from server biroo");
});
server.listen(8000,() =>{
    console.log("http://localhost:8000");
});

// console.log(arguments);