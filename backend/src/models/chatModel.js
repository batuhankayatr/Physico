const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
  {
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor', // Doctor modelini referans veriyoruz
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient', // Patient modelini referans veriyoruz
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
