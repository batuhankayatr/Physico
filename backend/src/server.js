const express = require('express');
//const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const messageRoutes = require("./routes/messageRoutes");
const messageController = require("./controllers/messageController");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const http = require("http");
const socketIo = require("socket.io");
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})

connectDB();
//dotenv.config();
const app =express();
const server = http.createServer(app);
const io = socketIo(server);

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



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



//const PORT = process.env.PORT ;


app.listen(5000,console.log(`Server started on PORT : ${PORT}`));