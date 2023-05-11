function sendMessage() {
  var message = document.getElementById("textbox").value;
  document.getElementById("conversation").innerHTML += "<p><strong>Você:</strong> " + message + "</p>";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/get?msg=" + message, false);
  xhr.send();
  var botResponse = xhr.responseText;
  document.getElementById("conversation").innerHTML += "<p><strong>Bot:</strong> " + botResponse + "</p>";
  document.getElementById("textbox").value = "";
}

/* function sendMessage() {
  var userMessage = document.getElementById("usermsg").value;
  document.getElementById("chatbox").innerHTML += "<p><strong>Você:</strong> " + userMessage + "</p>";
  verificarVaga(userMessage)
  document.getElementById("usermsg").value = "";
}

function verificarVaga(userMessage) {
  //Verificando se vaga existe
  if (userMessage == 1) {
    var botMessage = "Okay, você escolheu a vaga: " + document.getElementById("usermsg").value;
    document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + botMessage + "</p>";
    eliminatorias();

  } else { //Vaga inexistente
    var botMessage = "O código de vaga " + document.getElementById("usermsg").value + " expirou ou não existe";
    document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + botMessage + "</p>";
    finalizar();
  }


}

function eliminatorias(userMessage) {
  //Perguntas Eliminatórias (são decididas aleatóriamente)
  var perguntas = ["Você tem experiência na área desejada?", "Você tem conhecimento do idioma inglês intermediário/avançado?", "Você tem conhecimento em Python?"];
  var perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
  // Exibindo a pergunta aleatória no chat
  document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + perguntaAleatoria + "</p>";

  if (userMessage == "sim") {
    var botMessage = "proseguindo";
    document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + botMessage + "</p>";

  } else {
    var botMessage = "Esse conhecimento é obrigatório para essa vaga. Tente outras vagas disponíveis.";
    document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + botMessage + "</p>";
    finalizar();
  }
}

function finalizar() {
  document.getElementById("btnSubmit").disabled = true;
  document.getElementById("usermsg").disabled = true;
  document.getElementById("reiniciar-conversa").style.display = "block";

}

function reiniciarConversa() {
  location.reload();
}

function removeMessage() {
  const paragrafo = document.getElementById("bemVindo");
  // Remove o parágrafo
  paragrafo.remove();
} */