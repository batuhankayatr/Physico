const express = require('express');
const path = require('path');
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require('mongoose');

const chats = require('./data/data');
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const messageRoutes = require("./routes/messageRoutes");
const chatRoutes = require("./routes/chatRoutes");
const Chat = require("./models/chatModel");
const Message = require("./models/messageModel");
const messageController = require("./controllers/messageController");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/doctor", doctorRoutes);
app.use("/api", patientRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/messages', messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(5000, console.log(`Server started on PORT : ${PORT}`));

const io = socketIo(server, {
  //pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log('Socket.io bağlantısı kuruldu');

  socket.on('setup', (userData) => {
    socket.join(userData.id);
    socket.emit('connected');
    console.log("connected")
  });

  socket.on('join chat', (chatId) => {
    socket.join(chatId);
    console.log('User joined chat: ' + chatId);
  });

  socket.on('send message', async (messageData) => {
    const { chatId, senderId, senderType, content } = messageData;

    console.log("Received data:", messageData);

    // ID'lerin geçerliliğini kontrol et
    if (!mongoose.isValidObjectId(senderId) || !mongoose.isValidObjectId(chatId)) {
      console.error('Invalid senderId or chatId');
      socket.emit('error', 'Invalid senderId or chatId');
      return;
    }

    let sender;
    if (senderType === 'Doctor') {
      sender = { senderDoctor: new mongoose.Types.ObjectId(senderId) };
    } else if (senderType === 'Patient') {
      sender = { senderPatient: new mongoose.Types.ObjectId(senderId) };
    } else {
      console.error('Invalid senderType');
      socket.emit('error', 'Invalid senderType');
      return;
    }

    const newMessage = {
      content,
      chat: new mongoose.Types.ObjectId(chatId),
      ...sender,
      createdAt: new Date()
    };

    try {
      const message = await Message.create(newMessage);
      await Chat.findByIdAndUpdate(chatId, { latestMessage: message._id });

      io.to(chatId).emit('message received', message);
    } catch (error) {
      console.error('Error creating message:', error);
      socket.emit('error', 'Error creating message');
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
