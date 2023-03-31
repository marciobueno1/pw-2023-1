const inputItem = document.getElementById("inputItem");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const itemText = document.createTextNode(listaItems[index]);
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  }
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  if (!item) {
    alert("Necessário digitar um item!");
    return;
  }
  listaItems.push(item);
  inputItem.value = "";
  inputItem.focus();
  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
