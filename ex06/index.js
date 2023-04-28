const btJogar = document.getElementById("btJogar");
const resultadoDado = document.getElementById("resultadoDado");
const resultado = document.getElementById("resultado");

const handleBtJogar = () => {
  let dado = Math.floor(Math.random() * 6) + 1;
  resultadoDado.innerHTML = dado;
  resultadoDado.className = resultadoDado.className ? "" : "h1Inverted";
  if (dado < 5) {
    resultado.innerHTML = "Você perdeu!";
  } else {
    resultado.innerHTML = "Você ganhou!";
  }
};

btJogar.onclick = handleBtJogar;
