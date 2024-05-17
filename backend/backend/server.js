const express = require('express');
//const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})

connectDB();
//dotenv.config();
const app =express();

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("API is running");
});

app.use("/api/doctor",doctorRoutes);
app.use("/api",patientRoutes);
app.use("/api/exercise", exerciseRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ;


app.listen(5000,console.log(`Server started on PORT : ${PORT}`));