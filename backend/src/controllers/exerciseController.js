const asyncHandler = require("express-async-handler");
const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");
const Exercise = require("../models/exerciseModel");


const createExercise = asyncHandler(async (req, res) => {
    const { name, description, set, repeats, youtubeId, patientId, day } = req.body;

    if (!name || !description || !set || !repeats || !youtubeId || !patientId ||!day ) {
        res.status(400);
        throw new Error("Bütün alanları doldur");
    }


    const doctorIdString = req.body.doctorId;
    console.log(doctorIdString);
    //const doctorId = mongoose.Types.ObjectId(doctorIdString);
    const doctor = await Doctor.findById(doctorIdString); // Doktoru bulun
    const patientfind = await Patient.findById(patientId);
    console.log(patientfind._id,"1");
    console.log(doctor.name)
    const exercise = await Exercise.create({
        name,
        description,
        set,
        repeats,
        youtubeId,
        patientId: patientfind._id ,
        patientName: patientfind.name,
        doctor: doctorIdString,
        doctorName : doctor.name,
        day,
        
    });


    if (exercise) {
        res.status(201).json({
            _id: exercise._id,
            name: exercise.name,
            description: exercise.description,
            set: exercise.set,
            repeats: exercise.repeats,
            youtubeId: exercise.youtubeId,
            patient: exercise.patientId,
            patientName: exercise.patientName,
            doctor : exercise.doctor,
            doctorName: exercise.doctorName,
            isActive : exercise.isActive,
            day : exercise.day,
            isDone : exercise.isDone
            
        });
    } else {
        res.status(400);
        throw new Error("Failed To Create The User");
    }
});


const doneExercise = asyncHandler(async (req, res) => {
  try {
    const exerciseId = req.params.exerciseId;

    const patientId = req.body.patientId;

    const exercise = await Exercise.findById(exerciseId);
    
    if(exercise.patientId = patientId){

    exercise.isDone= true;
  
    exercise.doneDate = Date.now(); 
    await exercise.save(); }
    res.status(200).json({ success: true, data: exercise });
  } catch (error) {
    console.error("Error updating exercise:", error);
    res.status(500).json({ success: false, error: "Error updating exercise" });
  }
});


const getExercisePatient = asyncHandler(async (req,res) =>{
    try {
        
        const patientId = req.body.patientId;
        const exercise = await Exercise.findById(patientId);

        if (exercise.isActive= true) {
            res.status(200).json({ success: true, data: exercise });
        } else {
            
            res.status(404).json({ success: false, error: "Exercise not found" });
        }
    } catch (error) {
        console.error("Error fetching exercise:", error);
        res.status(500).json({ success: false, error: "Error fetching exercise" });
    }
});

const getExerciseDoctor = asyncHandler(async (req,res) =>{
    try {
        const {day, patientId} = req.body;
        const doctorId = req.body.doctorId;
        const exercise = await Exercise.findExerciseByPatientIdAndDayAndDoctorId( patientId, day, doctorId);
        if (exercise) {
            res.status(200).json({ success: true, data: exercise });
        } else {
            
            res.status(404).json({ success: false, error: "Exercise not found" });
        }
    } catch (error) {
        console.error("Error fetching exercise:", error);
        res.status(500).json({ success: false, error: "Error fetching exercise" });
    }
});
const updateExercise = asyncHandler(async (req, res) => {
    try {
        const { day, set, repeats, youtubeId, description, name } = req.body;
        const doctorId = req.body.doctorId;

        if (!doctorId) {
            return res.status(400).json({ success: false, error: "Doctor ID is required" });
        };
        const exerciseId = req.body.exerciseId;

        const exercise = await Exercise.findById(exerciseId);
        if (!exercise) {
            return res.status(404).json({ success: false, error: "Exercise not found" });
        };

        exercise.day = day;
        exercise.set = set;
        exercise.repeats = repeats;
        exercise.youtubeId = youtubeId;
        exercise.description = description;
        exercise.name = name;

        await exercise.save();

        res.status(200).json({ success: true, data: exercise });
    } catch (error) {
        console.error("Error updating exercise:", error);
        res.status(500).json({ success: false, error: "Error updating exercise" });
    }
});
const inactiveExercise = asyncHandler(async (req, res) => {
    try {
      const exerciseId = req.params.exerciseId;
  
      const doctorId = req.body.doctorId;
  
      const exercise = await Exercise.findById(exerciseId);
      
      if(exercise.doctorId = doctorId){
  
      exercise.isActive= false;
     
      await exercise.save(); }
      res.status(200).json({ success: true, data: exercise });
    } catch (error) {
      console.error("Error updating exercise:", error);
      res.status(500).json({ success: false, error: "Error updating exercise" });
    }
  });
  

module.exports = {createExercise, doneExercise, getExercisePatient, getExerciseDoctor, updateExercise, inactiveExercise};