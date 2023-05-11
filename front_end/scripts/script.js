function sendMessage() {  
  var userMessage = document.getElementById("usermsg").value;
  document.getElementById("chatbox").innerHTML += "<p><strong>Você:</strong> " + userMessage + "</p>";
  // Aqui você pode usar uma API para processar a mensagem do usuário e gerar uma resposta automática.
  // Neste exemplo, estou simplesmente respondendo com uma mensagem fixa.
  var botMessage = "Okay, você escolheu a vaga: " + document.getElementById("usermsg").value;
  document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + botMessage + "</p>";
  document.getElementById("usermsg").value = "";
  return false;
}

function removeMessage(){    
  const paragrafo = document.getElementById("bemVindo");
  // Remove o parágrafo
  paragrafo.remove();
}