const express = require("express");
const router = express.Router();
const {registerPatient, authPatient, changePassword, uploadPatientImage, deletePatient} = require("../controllers/patientControllers");

router.route('/patient/register').post(registerPatient);
router.post('/patient/login',authPatient);
router.put('/patient/changePassword',changePassword);
router.post('/patient/upload/:id', uploadPatientImage);
router.delete('/patient/remove', deletePatient);

module.exports = router;
