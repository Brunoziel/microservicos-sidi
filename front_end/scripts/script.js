function sendMessage() {
  var userMessage = document.getElementById("usermsg").value;
  document.getElementById("chatbox").innerHTML += "<p><strong>You:</strong> " + userMessage + "</p>";
  // Aqui você pode usar uma API para processar a mensagem do usuário e gerar uma resposta automática.
  // Neste exemplo, estou simplesmente respondendo com uma mensagem fixa.
  var botMessage = "Olá! Eu sou um chatbot. Como posso ajudar?";
  document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + botMessage + "</p>";
  document.getElementById("usermsg").value = "";
  return false;
}