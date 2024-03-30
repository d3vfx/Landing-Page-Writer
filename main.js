console.log('Hello World!');

// JavaScript
document.querySelector('a').addEventListener('click', function() {
  // Você pode adicionar lógica adicional aqui se necessário
  alert('Download iniciado!');
});

// Adicione isso ao seu arquivo JavaScript (seu-script.js)
var dialog = document.getElementById('meuDialog');
var closeButton = document.getElementsByClassName('close-button')[0];

// Quando o usuário clica no botão "X", fecha o dialog
closeButton.onclick = function() {
  dialog.style.display = "none";
}

// Função para abrir o dialog
function showDialog() {
  dialog.style.display = "block";
}

// Evento que aciona a função showDialog assim que a página carrega
document.addEventListener('DOMContentLoaded', function() {
  showDialog();
});
