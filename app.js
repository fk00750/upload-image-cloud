const express = require("express");
const Router = require("./Routes/main");
const bodyParser = require('body-parser')
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", Router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port : ${PORT}`));
