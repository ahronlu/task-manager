const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(port, console.log("Server run on port " + port));
