const asyncHandler = require('express-async-handler');
const Message = require('../models/messageModel');
const Chat = require('../models/chatModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/chatModel');

const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId, senderId, senderType } = req.body;

  if (!content || !chatId || !senderId || !senderType) {
    res.status(400);
    throw new Error('Invalid data passed into request');
  }

  const newMessage = {
    content,
    chat: chatId,
  };

  if (senderType === 'Doctor') {
    newMessage.senderDoctor = senderId;
  } else if (senderType === 'Patient') {
    newMessage.senderPatient = senderId;
  }

  try {
    let message = await Message.create(newMessage);

    message = await message
      .populate('senderDoctor', 'name pic')
      .populate('senderPatient', 'name pic')
      .populate('chat')
      .execPopulate();

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate('senderDoctor', 'name pic email')
      .populate('senderPatient', 'name pic email')
      .populate('chat');

    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { sendMessage, allMessages };
