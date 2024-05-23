const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'senderModel' },
    receiver: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'receiverModel' },
    senderModel: { type: String, required: true, enum: ['Doctor', 'Patient'] },
    receiverModel: { type: String, required: true, enum: ['Doctor', 'Patient'] },
    message: { type: String, required: true },
    read: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
