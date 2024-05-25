const express = require("express");
const router = express.Router();
const chatController = require("../controllers/messageController");

// Belirli bir doktor ve hasta arasındaki tüm mesajları alma
router.get("/messages/:doctorId/:patientId", chatController.allMessages);
// Mesaj gönderme
router.post("/sendMessage", chatController.sendMessage);

module.exports = router;
