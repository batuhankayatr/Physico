const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs");

const patientSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true, unique: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    age :{ type:"Number"},
    weight : { type : "Number"},
    height :{type : "Number"},
    sex : { type : "String"},
    doctor : [{type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}],
    doctorName :{type :"String",}

  },
  { timestaps: true },
  
);

patientSchema.methods.matchPassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

patientSchema.pre("save", async function(next) {
    if (!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;