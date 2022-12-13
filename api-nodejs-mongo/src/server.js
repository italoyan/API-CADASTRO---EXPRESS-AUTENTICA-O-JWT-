const express = require('express');

const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");

const indexRoute = require("./routes/index");
const authRoute = require("./routes/Auth");
const adminRoute = require("./routes/Admin");
const app = express();

app.use(express.json());

app.use('/',indexRoute);
app.use("/auth", authRoute);
app.use("/users", adminRoute);

app.listen(3001, ()=>{
    console.log('Server is running');
})