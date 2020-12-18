const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./db/mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(port, console.log("Server run on port " + port));
