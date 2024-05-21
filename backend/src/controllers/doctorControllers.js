const asyncHandler = require("express-async-handler");
const Patient = require ("../models/patientModel");
const generateToken = require("../config/generateToken");
const Doctor = require ("../models/doctorModel");
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('pic');

const registerDoctor =asyncHandler( async (req,res) => {
    
    const {email,name, tcno, password, pic,  diploma}= req.body;

     if(!name || !email || !password || !tcno || !diploma ){
        res.status(400);
        throw new Error("Bütün alanları doldur");
     };

    const doctorExists = await Doctor.findOne({email});

    if(doctorExists){
        res.status(400);
        throw new Error("Doctor already exists")
    }

    

    const doctor = await Doctor.create({
        name,
        email,
        password,
        pic,
        tcno,
        diploma,
        
        
    });

    if(Doctor){
        res.status(201).json({
            _id: doctor._id,
            name : doctor.name,
            email : doctor.email,
            pic : doctor.pic,
            
            token : generateToken(doctor._id)
        });
    } else{
        res.status(400);
        throw new Error("Failed To Create The User");
    }
});

const authDoctor = asyncHandler(async(req, res) =>{
    const {email, password} = req.body;

    const doctor = await Doctor.findOne({email});

    if(doctor && (await doctor.matchPassword(password)) ){
        res.json({
            _id: doctor._id,
            name : doctor.name,
            email : doctor.email,
            pic : doctor.pic,
            token : generateToken(doctor._id)
        });
        
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});
const getPatients = asyncHandler(async (req, res) => {
    try {
        const doctorId = req.body.doctorId;

        const doctor = await Doctor.findById(doctorId);

        if (doctor) {
            const patients = await Patient.find({ doctor: doctorId });
            res.status(200).json({ success: true, data: patients });
        } else {
            res.status(404).json({ success: false, error: "Doctor not found" });
        }
    } catch (error) {
        console.error("Error getting patients:", error);
        res.status(500).json({ success: false, error: "Error getting patients" });
    }
});
const changePassword = asyncHandler(async (req, res) => {
    try {
        const { enteredPassword, newPassword, email } = req.body;

        
        const doctor = await Doctor.findOne({ email });

        if (!doctor) {
            res.status(404).json({ success: false, error: "Doctor not found" });
            return;
        }
        
        const isMatch = await doctor.matchPassword(enteredPassword);
        if (!isMatch) {
            res.status(401).json({ success: false, error: "Invalid old password" });
            return;
        }
        console.log(doctor.password)
        doctor.password = newPassword;
        await doctor.save();

        res.status(200).json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ success: false, error: "Error changing password" });
    }
});
const uploadDoctorImage = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ message: 'Dosya yükleme hatası', error: err });
      }
  
      try {
        const doctorId = req.params.id; // Hasta ID'sinin URL'de geçtiğini varsayıyoruz
        const doctor = await Doctor.findById(doctorId);
  
        if (!doctor) {
          return res.status(404).json({ message: 'Hasta bulunamadı' });
        }
  
        doctor.pic = req.file.buffer;
        await doctor.save();
  
        res.json({ message: 'Resim başarıyla yüklendi' });
      } catch (error) {
        res.status(500).json({ message: 'Sunucu hatası', error: error.message });
      }
    });
  };






module.exports = {registerDoctor, authDoctor, getPatients, changePassword,uploadDoctorImage};