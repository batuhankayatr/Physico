const express = require("express");
const router = express.Router();
const {registerDoctor, authDoctor} = require("../controllers/doctorControllers");

router.route('/admin/register').post(registerDoctor);
router.post('/admin/login',authDoctor);

module.exports = router;
