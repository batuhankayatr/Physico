const asyncHandler = require('express-async-handler');
const Message = require('../models/messageModel');
const Chat = require('../models/chatModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel'); // Doğru model dosyasını ekleyelim

const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId, senderId, senderType } = req.body;

  if (!content || !chatId || !senderId || !senderType) {
    res.status(400);
    throw new Error('Invalid data passed into request');
  }

  const newMessage = {
    content,
    chat: chatId,
    senderType, // senderType'ı ekleyelim
  };

  if (senderType === 'Doctor') {
    newMessage.senderDoctor = senderId;
  } else if (senderType === 'Patient') {
    newMessage.senderPatient = senderId;
  }

  try {
    // Yeni mesajı oluşturun
    let message = await Message.create(newMessage);

    // Mesajı ilgili alanlarla yeniden sorgulayarak populate edin
    message = await Message.findById(message._id)
      .populate('senderDoctor', 'name pic')
      .populate('senderPatient', 'name pic')
      .populate('chat');

    // En son mesajı chat'e güncelleyin
    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

    // Mesajı JSON olarak döndürün
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
