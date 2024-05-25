const express = require('express');
const { accessChat } = require('../controllers/chatController');
const router = express.Router();

// Sohbet başlatmak veya mevcut sohbeti almak için rota
router.post('/',  accessChat);

module.exports = router;
