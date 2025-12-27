function getResponse(userInput) {
  const input = userInput.toLowerCase();

  for (let keyword in responses) {
    if (input.includes(keyword)) {
      const possibleReplies = responses[keyword];
      return possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
    }
  }

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
