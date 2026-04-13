const express = require("express");
const app = express();
const user = require("../400_users_data.json");
const fs = require("fs");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("hello bhai log kese ho aap log");
})

router.get("/api/user",(req,res)=>{
    return res.json(user);
})

router.get("/user",(req,res)=>{
    const html = 
    `
    <ul>
    ${user.map(user => `<li>${user.name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})
//imp : dynamic route : ye route tab use hota hai jab hume kisi specific user ke data ko fetch karna hota hai to hum dynamic route ka use karte hai jisme hum user ke id ko url me pass karte hai aur uske basis par hum user ke data ko fetch karte hai
router.get("/api/user/:id",(req,res)=>{
    const id = Number(req.params.id);
    const users = user.find(user => user.id === id );
    return res.json(users);

})

// router.post("/api/user",(req,res)=>{
//     const data = req.body;
//     fs.writeFileSync("./400_users_data.json",JSON.stringify([data]));
//     console.log(data);
//     res.send("User received");
// });

//add user
router.post("/api/user",(req,res)=>{
    const data = req.body;
    const users = JSON.parse(fs.readFileSync("./400_users_data.json"));
    users.push(data);
    fs.writeFileSync("./400_users_data.json",JSON.stringify(users));
    console.log(data);
    res.send("User received");
});

//delete user
router.delete("/api/user/:id", (req, res) => {
    const id = Number(req.params.id);

    const users = JSON.parse(
        fs.readFileSync("./400_users_data.json", "utf-8")
    );

    // find index
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    // delete user
    const deletedUser = users.splice(index, 1);

    // save updated data
    fs.writeFileSync(
        "./400_users_data.json",
        JSON.stringify(users, null, 2)
    );

    res.json({
        message: "User deleted",
        user: deletedUser[0]
    });
});
//update 

// add user
// api vidio rewatch karna hai

module.exports = router;