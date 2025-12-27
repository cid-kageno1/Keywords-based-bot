const { getBotReply } = require("../services/chat.service");

exports.chatHandler = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: "Message is required"
    });
  }

  const reply = getBotReply(message);

  res.json({
    success: true,
    userMessage: message,
    botReply: reply,
    timestamp: new Date()
  });
};
