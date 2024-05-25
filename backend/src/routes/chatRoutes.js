const express = require('express');
const { accessChat } = require('../controllers/chatController');

const router = express.Router();

// POST request to start or access a chat
router.post('/access', accessChat);

module.exports = router;
