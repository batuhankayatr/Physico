const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
  {
    senderDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    senderPatient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    content: {
      type: String,
      required: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
