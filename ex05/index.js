const lista = document.getElementById("lista");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");

let dados = {};

const renderizaLista = (lista, pessoas) => {
  lista.innerHTML = "";
  pessoas.forEach((pessoa) => {
    const itemText = document.createTextNode(
      `${pessoa.name} (${pessoa.birth_year})`
    );
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  });
};

const getPessoas = (url) => {
  console.log("antes do fetch");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dados = data;
      btAnterior.disabled = !dados.previous;
      btProxima.disabled = !dados.next;
      console.log("qtd pessoas = " + data.count);
      renderizaLista(lista, data.results);
    });
  console.log("após o fetch");
};

const handleBtAnteriorClick = () => {
  getPessoas(dados.previous);
};

const handleBtProximaClick = () => {
  getPessoas(dados.next);
};

getPessoas("https://swapi.dev/api/people/?page=1");

btAnterior.onclick = handleBtAnteriorClick;
btProxima.onclick = handleBtProximaClick;
