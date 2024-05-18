const express = require("express");
const router = express.Router();
const {registerPatient, authPatient, changePassword} = require("../controllers/patientControllers");

router.route('/patient/register').post(registerPatient);
router.post('/patient/login',authPatient);
router.put('/patient/changePassword',changePassword);

module.exports = router;
