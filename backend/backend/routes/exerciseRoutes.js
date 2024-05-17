const express = require("express");
const router = express.Router();
const { createExercise,  doneExercise, getExercisePatient } = require("../controllers/exerciseController");

// createExercise fonksiyonunu /create route'una bağla
router.post('/create', createExercise);
router.post('/:exerciseId/doneExercise',doneExercise);
router.get('/myExercises',getExercisePatient);

module.exports = router;
