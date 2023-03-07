// window.alert("Olá!");
// alert("Olá!");
let nome = prompt("Digite o seu nome: ");
console.log("nome digitado = ", nome);

console.log("Imprimindo algo no console...");

console.log("location.search = ", location.search);

document.getElementById("titulo1").innerHTML = "Título inicial";

setTimeout(
  () => (document.getElementById("titulo1").innerHTML = "Troquei o título..."),
  5000
);
