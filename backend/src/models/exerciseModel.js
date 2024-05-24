const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    name: { type: "String" },
    description: { type: "String" },
    set: { type: "Number" },
    repeats: { type: "Number" },
    youtubeId: { type: "String" },
    patientId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
    doctor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
    doctorName: { type: "String" },
    patientName: { type: "String" },
    isActive: { type: "Boolean", default: true },
    day: { type: "String", enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
    isDone: { type: "Boolean", default: false },
    doneDate: { type: "Date" }
  },
  { timestamps: true }
);



exerciseSchema.statics.findExerciseByPatientIdAndDayAndDoctorId = async function(patientId, day, doctorId) {
  return this.find({ patientId: patientId, day: day, doctor: doctorId });
};


const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
