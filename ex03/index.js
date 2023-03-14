const inputValor1 = document.getElementById("inputValor1");
const inputValor2 = document.getElementById("inputValor2");
const inputValor3 = document.getElementById("inputValor3");
const btCalcular = document.getElementById("btCalcular");

const handleBtCalcularClick = () => {
  const valor1 = Number(inputValor1.value);
  const valor2 = Number(inputValor2.value);
  const valor3 = Number(inputValor3.value);
  const media = (valor1 + valor2 + valor3) / 3;
  alert(`A média é ${media}`);
};

btCalcular.onclick = handleBtCalcularClick;
