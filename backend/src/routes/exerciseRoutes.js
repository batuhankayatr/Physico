const express = require("express");
const router = express.Router();
const { createExercise,  doneExercise, getExercisePatient, getExerciseDoctor, updateExercise, inactiveExercise  } = require("../controllers/exerciseController");

// createExercise fonksiyonunu /create route'una bağla
router.post('/create', createExercise);
router.post('/:exerciseId/doneExercise',doneExercise);
router.get('/myExercises',getExercisePatient);
router.get('/doctorExercises',getExerciseDoctor);
router.put('/updateExercise',updateExercise);
router.post('/:exerciseId/inActiveExercise',inactiveExercise);


module.exports = router;
