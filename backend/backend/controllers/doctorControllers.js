const asyncHandler = require("express-async-handler");
//const Patient = require ("../models/patientModel");
const generateToken = require("../config/generateToken");
const Doctor = require ("../models/doctorModel");
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

module.exports = {registerDoctor, authDoctor};