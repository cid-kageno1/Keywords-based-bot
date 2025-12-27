function startChatbot() {
  alert("Welcome! I'm a simple chatbot.\nType 'bye' or 'quit' to exit.");

  while (true) {
    let userInput = prompt("You:");

    if (!userInput) continue;

    if (["bye", "quit"].includes(userInput.toLowerCase())) {
      alert("ChatBot: Goodbye! Have a great day!");
      break;
    }

    const reply = getResponse(userInput);
    alert("ChatBot: " + reply);
  }
}

startChatbot();
