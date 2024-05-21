const express = require("express");
const router = express.Router();
const {registerPatient, authPatient, changePassword, uploadPatientImage} = require("../controllers/patientControllers");

router.route('/patient/register').post(registerPatient);
router.post('/patient/login',authPatient);
router.put('/patient/changePassword',changePassword);
router.post('/patient/upload/:id', uploadPatientImage);

module.exports = router;
