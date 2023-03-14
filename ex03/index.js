const inputValor1 = document.getElementById("inputValor1");
const inputValor2 = document.getElementById("inputValor2");
const inputValor3 = document.getElementById("inputValor3");
const btCalcular = document.getElementById("btCalcular");

const isValid = (str) => {
  const num = Number(str);
  return str !== "" && num >= 0;
};

const handleBtCalcularClick = () => {
  // if (
  //   inputValor1.value === "" ||
  //   inputValor2.value === "" ||
  //   inputValor3.value === ""
  // ) {
  //   alert("É preciso digitar todos os valores");
  //   return;
  // }

  if (!isValid(inputValor1.value)) {
    alert("Erro no valor 1: É preciso digitar um valor maior ou igual a zero");
    return;
  }
  if (!isValid(inputValor2.value)) {
    alert("Erro no valor 2: É preciso digitar um valor maior ou igual a zero");
    return;
  }
  if (!isValid(inputValor3.value)) {
    alert("Erro no valor 3: É preciso digitar um valor maior ou igual a zero");
    return;
  }

  const valor1 = Number(inputValor1.value);
  const valor2 = Number(inputValor2.value);
  const valor3 = Number(inputValor3.value);

  console.log(`inputValor1.value: ->${inputValor1.value}<-`);
  console.log("valor1", valor1);
  console.log(`inputValor2.value: ->${inputValor2.value}<-`);
  console.log("valor2", valor2);
  console.log(`inputValor3.value: ->${inputValor3.value}<-`);
  console.log("valor3", valor3);

  const media = (valor1 + valor2 + valor3) / 3;
  alert(`A média é ${media.toFixed(2)}`);

  inputValor1.value = "";
  inputValor2.value = "";
  inputValor3.value = "";

  inputValor1.focus();
};

btCalcular.onclick = handleBtCalcularClick;
