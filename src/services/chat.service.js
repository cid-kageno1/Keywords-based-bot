const responses = require("../data/responses");
const { normalizeText } = require("../utils/text.util");

exports.getBotReply = (userInput) => {
  const input = normalizeText(userInput);

  for (const keyword in responses) {
    if (input.includes(keyword)) {
      const replies = responses[keyword];
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }

  return responses.default[
    Math.floor(Math.random() * responses.default.length)
  ];
};
