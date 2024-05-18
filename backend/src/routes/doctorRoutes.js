const express = require("express");
const router = express.Router();
const {registerDoctor, authDoctor, getPatients, changePassword} = require("../controllers/doctorControllers");

router.route('/admin/register').post(registerDoctor);
router.post('/admin/login',authDoctor);
router.get('/listPatients',getPatients);
router.put('/admin/changePassword',changePassword);

module.exports = router;
