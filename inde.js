// Chame o elemento pai onde as divs serão adicionadas
var elementoPai = document.getElementById("elemento-pai");

// Número de divs que você deseja criar
var numeroDivs = 50;

// Função para criar e animar uma div
function criarDiv() {
  // Criando a div
  var div = document.createElement("div");

  // Definindo estilos aleatórios para a posição da div
  div.style.position = "absolute";
  div.style.left = Math.random() * 98 + "%"; // Posição horizontal aleatória em porcentagem
  div.style.top = "-5px"; // Posição vertical inicial acima da janela

  // Definindo o tamanho, formato e cor da div
  div.style.width = "2px";
  div.style.borderRadius = "50%";
  div.style.height = Math.random() * 10 + "px";

  // Definindo a
  div.style.backgroundColor = "#9624f9b3";

  // Adicionando a classe "chuva" à div
  div.classList.add("chuva");

  // Adicionando o evento de finalização de animação
  div.addEventListener("animationend", function () {
    div.remove();
  });

  // Adicionando a div ao elemento pai
  elementoPai.appendChild(div);
}

function criarDivsIntervalo() {
  criarDiv();
  var intervalo = Math.random() * 500; // Intervalo aleatório entre 0ms e 500ms
  setTimeout(criarDivsIntervalo, intervalo);
}
criarDivsIntervalo();
