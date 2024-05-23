const Message = require('../models/messageModel');

// Mesaj gönderme işlevi
const sendMessage = async ({ doctorId, patientId, senderModel, messageContent }) => {
  try {
    const receiverModel = senderModel === 'Doctor' ? 'Patient' : 'Doctor';
    const senderId = senderModel === 'Doctor' ? doctorId : patientId;
    const receiverId = senderModel === 'Doctor' ? patientId : doctorId;

    const message = new Message({
      sender: senderId,
      receiver: receiverId,
      senderModel,
      receiverModel,
      message: messageContent,
    });

    await message.save();
    return message;
  } catch (error) {
    console.error("Mesaj gönderilemedi:", error);
    throw error;
  }
};

// Belirli bir doktor ve hasta arasındaki tüm mesajları alma işlevi
const getMessagesBetweenDoctorAndPatient = async (doctorId, patientId) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: doctorId, receiver: patientId, senderModel: 'Doctor', receiverModel: 'Patient' },
        { sender: patientId, receiver: doctorId, senderModel: 'Patient', receiverModel: 'Doctor' },
      ],
    }).sort({ createdAt: 1 }); // Tarih sırasına göre sıralama

    return messages;
  } catch (error) {
    console.error("Mesajlar alınamadı:", error);
    throw error;
  }
};

// Socket.io olaylarını işleme
const handleSocketConnection = (socket) => {
  console.log("Yeni bir kullanıcı bağlandı");

  socket.on("sendMessage", async (data) => {
    try {
      const message = await sendMessage(data);
      socket.emit("messageReceived", message); // Gönderen kullanıcıya mesajı geri gönder
      socket.to(data.receiverId).emit("messageReceived", message); // Alıcıya mesajı gönder
    } catch (error) {
      console.error("Mesaj gönderilemedi:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Kullanıcı bağlantıyı kesti");
  });
};

// REST API ile mesaj gönderme işlevi
const sendMessageAPI = async (req, res) => {
  const { doctorId, patientId, senderModel, messageContent } = req.body;
  try {
    const message = await sendMessage({ doctorId, patientId, senderModel, messageContent });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: "Mesaj gönderilemedi", error });
  }
};

// Belirli bir doktor ve hasta arasındaki tüm mesajları alma işlevi (REST API)
const getMessagesAPI = async (req, res) => {
  const { doctorId, patientId } = req.params;
  try {
    const messages = await getMessagesBetweenDoctorAndPatient(doctorId, patientId);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Mesajlar alınamadı", error });
  }
};

module.exports = {
  sendMessage,
  getMessagesBetweenDoctorAndPatient,
  handleSocketConnection,
  sendMessageAPI,
  getMessagesAPI,
};
