const asyncHandler = require("express-async-handler");
const Patient = require("../models/patientModel");
const generateToken = require("../config/generateToken");
const Doctor = require("../models/doctorModel");
const mongoose = require("mongoose");

const registerPatient = asyncHandler(async (req, res) => {
    const { name, email, password, pic, age, weight, height, sex } = req.body;

    if (!name || !email || !password || !age || !weight || !height || !sex) {
        res.status(400);
        throw new Error("Bütün alanları doldur");
    }

    const patientExists = await Patient.findOne({ email });

    if (patientExists) {
        res.status(400);
        throw new Error("Patient already exists");
    }

    const doctorIdString = req.body.doctorId;
    console.log(doctorIdString);
    //const doctorId = mongoose.Types.ObjectId(doctorIdString);
    const doctor = await Doctor.findById(doctorIdString); // Doktoru bulun
    
    console.log(doctor.name)
    const patient = await Patient.create({
        name,
        email,
        password,
        pic,
        age,
        weight,
        height,
        sex,
        doctor: doctorIdString,
        doctorName : doctor.name // doğru doktorun _id'sini buraya atıyoruz
    });

    


    if (patient) {
        res.status(201).json({
            _id: patient._id,
            name: patient.name,
            email: patient.email,
            pic: patient.pic,
            age: patient.age,
            weight: patient.weight,
            height: patient.height,
            sex: patient.sex,
            token: generateToken(patient._id)
        });
    } else {
        res.status(400);
        throw new Error("Failed To Create The User");
    }
});

const authPatient = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const patient = await Patient.findOne({ email });

    if (patient && (await patient.matchPassword(password))) {
        res.json({
            _id: patient._id,
            name: patient.name,
            email: patient.email,
            pic: patient.pic,
            age: patient.age,
            weight: patient.weight,
            height: patient.height,
            sex: patient.sex,
            token: generateToken(patient._id)
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

module.exports = { registerPatient, authPatient };
