const express = require("express");
const app = express();
const userRouter = require("./routes/user");
// const user = require("./400_users_data.json");
//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", userRouter);

app.listen(8000);