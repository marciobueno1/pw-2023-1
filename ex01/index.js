// alert("Olá!");

document.getElementById("titulo1").innerHTML = "Título inicial";

setTimeout(
  () => (document.getElementById("titulo1").innerHTML = "Troquei o título..."),
  5000
);
