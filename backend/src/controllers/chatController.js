const asyncHandler = require('express-async-handler');
const Chat = require('../models/chatModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/chatModel');

const accessChat = asyncHandler(async (req, res) => {
  const { doctorId, patientId } = req.body;

  if (!doctorId || !patientId) {
    res.status(400);
    throw new Error('DoctorId ve PatientId parametreleri gerekli');
  }

  let chat = await Chat.find({
    doctors: doctorId,
    patients: patientId,
  })
    .populate('doctors', '-password')
    .populate('patients', '-password')
    .populate('latestMessage');

  if (chat.length > 0) {
    res.send(chat[0]);
  } else {
    const chatData = {
      doctors: [doctorId],
      patients: [patientId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id })
        .populate('doctors', '-password')
        .populate('patients', '-password');
      res.status(200).send(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

module.exports = { accessChat };
