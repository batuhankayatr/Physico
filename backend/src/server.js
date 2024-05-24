const express = require('express');
const path = require('path');
const http = require("http");
const socketIo = require("socket.io");

const chats = require('./data/data');
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const messageRoutes = require("./routes/messageRoutes");
const messageController = require("./controllers/messageController");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { Socket } = require('dgram');
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

connectDB();

const app = express();
//const server = http.createServer(app);
//const io = socketIo(server); // socket.io'yu HTTP sunucusuna bağlama

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/doctor", doctorRoutes);
app.use("/api", patientRoutes);
app.use("/api/exercise", exerciseRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
const server= app.listen(5000,console.log(`Server started on PORT : ${PORT}`));

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
      // credentials: true,
    },
  });

io.on("connection", (socket) =>{
    console.log("connected to socket.io");
  });

// Socket.io bağlantısını yönetme



