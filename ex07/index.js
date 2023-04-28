const btJogador1 = document.getElementById("btJogador1");
const btJogador2 = document.getElementById("btJogador2");
const btReiniciar = document.getElementById("btReiniciar");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultadoIntermediario = document.getElementById(
  "resultadoIntermediario"
);
const resultadoFinalRodada = document.getElementById("resultadoFinalRodada");
const resultadoFinal = document.getElementById("resultadoFinal");
const h2Rodada = document.getElementById("h2Rodada");

const maxRodadas = 3;
let rodadas = 0; // quantidade de rodadas já jogadas
let dado1; // valor do dado do jogador 1
let dado2; // valor do dado do jogador 2
let score1 = 0; // pontuação do primeiro jogador
let score2 = 0; // pontuação do segundo jogador

const calcularRodada = () => {
  if (dado1 > dado2) {
    score1 += 1;
    resultadoIntermediario.innerHTML = "Jogador 1 ganhou";
  } else if (dado2 > dado1) {
    score2 += 1;
    resultadoIntermediario.innerHTML = "Jogador 2 ganhou";
  } else {
    resultadoIntermediario.innerHTML = "Empate";
  }
  resultadoFinalRodada.innerHTML = `${score1} x ${score2}`;
};

const calcularFimJogo = () => {
  if (rodadas === maxRodadas) {
    btJogador1.disabled = true;
    if (score1 > score2) {
      resultadoFinal.innerHTML = "Resultado Final = Jogador 1 ganhou";
    } else if (score2 > score1) {
      resultadoFinal.innerHTML = "Resultado Final = Jogador 2 ganhou";
    } else {
      resultadoFinal.innerHTML = "Resultado Final = Empate";
    }
  }
};

const handleBtJogador1Click = () => {
  btJogador1.disabled = true;
  btJogador2.disabled = false;
  rodadas += 1;
  h2Rodada.innerHTML = "Rodada " + rodadas;
  dado1 = Math.floor(Math.random() * 6) + 1;
  resultado1.innerHTML = dado1;
  resultado2.innerHTML = "";
  resultadoIntermediario.innerHTML = "";
};

const handleBtJogador2Click = () => {
  btJogador1.disabled = false;
  btJogador2.disabled = true;
  dado2 = Math.floor(Math.random() * 6) + 1;
  resultado2.innerHTML = dado2;
  calcularRodada();
  calcularFimJogo();
};

const handleBtReiniciarClick = () => {
  rodadas = 0;
  score1 = 0;
  score2 = 0;
  h2Rodada.innerHTML = "Rodada 1";
  resultado1.innerHTML = "";
  resultado2.innerHTML = "";
  resultadoIntermediario.innerHTML = "";
  resultadoFinalRodada.innerHTML = "";
  resultadoFinal.innerHTML = "";
  btJogador1.disabled = false;
};

btJogador1.onclick = handleBtJogador1Click;
btJogador2.onclick = handleBtJogador2Click;
btReiniciar.onclick = handleBtReiniciarClick;
