
// Função para gerar um número aleatório em um intervalo específico
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gerar números aleatórios para a, b, c e d
const re = getRandomNumber(0, 10);
const rf = getRandomNumber(0, 10);
const rg = getRandomNumber(5, 10);
const rh = getRandomNumber(0, 5);

// Exibir as equações
const resultA = document.querySelector(".a");
const resultB = document.querySelector(".b");
const resultC = document.querySelector(".c");
const resultD = document.querySelector(".d");
resultA.innerHTML = re+rf;
resultB.innerHTML = rg-rh;
resultC.innerHTML = rf+rh;
resultD.innerHTML = re+rg;

// Capturar o formulário e lidar com a submissão
const equationForm = document.getElementById("equation-form");
equationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores digitados pelo jogador
  const e = parseInt(document.querySelector(".e").value);
  const f = parseInt(document.querySelector(".f").value);
  const g = parseInt(document.querySelector(".g").value);
  const h = parseInt(document.querySelector(".h").value); 

  // Verificar se as respostas estão corretas
  if (re === e && rf === f && rg === g && rh === h) {
    document.getElementById("result").innerHTML = "";
    setTimeout(function(){window.alert("Parabéns! Suas respostas estão corretas.")},70);
    setTimeout(function(){window.location.reload(1); },500);
  } else {
    document.getElementById("result").innerHTML = "Tente novamente. Suas respostas estão incorretas.";
  }
});