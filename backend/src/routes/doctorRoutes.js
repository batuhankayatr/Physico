const express = require("express");
const router = express.Router();
const {registerDoctor, authDoctor, getPatients, changePassword, uploadDoctorImage} = require("../controllers/doctorControllers");

router.route('/admin/register').post(registerDoctor);
router.post('/admin/login',authDoctor);
router.get('/listPatients',getPatients);
router.put('/admin/changePassword',changePassword);
router.post('/admin/upload/:id', uploadDoctorImage);

module.exports = router;
