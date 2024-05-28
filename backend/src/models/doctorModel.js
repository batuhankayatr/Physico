const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const doctorSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    tcno: { type: Number, unique: true, required: true },
    password: { type: String, required: true },
    pic: {
      type: Buffer, // Store image as binary data
      default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    patient: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
    diploma: { type: Buffer } // Diploma PDF'sini Buffer olarak saklamak için
  },
  { timestamps: true }
);

doctorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


doctorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
