const express = require("express");
const router = express.Router();
const {registerDoctor, authDoctor, getPatients} = require("../controllers/doctorControllers");

router.route('/admin/register').post(registerDoctor);
router.post('/admin/login',authDoctor);
router.get('/listPatients',getPatients);

module.exports = router;
