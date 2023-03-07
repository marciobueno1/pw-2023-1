const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const btCalcular = document.getElementById("btCalcular");

const handleFocus = (evt) => {
  console.log(`focus no input ${evt.target.id}.`);
  // console.log("focus no input " + evt.target.id + ".");
  // console.log("evt", evt);
};

function handleBlur(evt) {
  console.log(`perdeu o focus no input ${evt.target.id} = blur`);
}

const handleBtCalcularClick = () => {
  console.log("clicou no botão calcular");
  const idade = inputIdade.value;
  const anoNascimento = 2023 - idade;
  alert(`Você nasceu em ${anoNascimento}`);
};

inputNome.onfocus = handleFocus;
inputNome.onblur = handleBlur;

inputIdade.onfocus = handleFocus;
inputIdade.onblur = handleBlur;

btCalcular.onclick = handleBtCalcularClick;
