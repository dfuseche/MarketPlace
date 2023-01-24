const express = require("express")
const mongoose = require("mongoose");
require('dotenv').config();
const usuarioRouter = require("./routes/usuarios");
const productRouter = require("./routes/products");
const bodyParser = require("body-parser");

const app = express();

console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL);
app.use(bodyParser.urlencoded({ extended: false }))

//Routes
app.use("/api/usuarios", usuarioRouter);
app.use("/api/products", productRouter);


app.listen(3000, ()=>{
    console.log("listening port 3000");
})





