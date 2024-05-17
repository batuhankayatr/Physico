const express = require("express");
const router = express.Router();
const {registerPatient, authPatient} = require("../controllers/patientControllers");

router.route('/patient/register').post(registerPatient);
router.post('/patient/login',authPatient);

module.exports = router;
