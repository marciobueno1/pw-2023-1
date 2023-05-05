const lista = document.getElementById("lista");

const taskUrl = "https://parseapi.back4app.com/classes/Task";
const headers = {
  "X-Parse-Application-Id": "RkjwBkfNZRERi3k4FVjojkTgLLe6CbbTPbW4qrQo",
  "X-Parse-REST-API-Key": "wmn69SVNaLq6UoW177InOj1tnXUsy2fkfvtHagdu",
};

const renderizaLista = (lista, tarefas) => {
  lista.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const itemText = document.createTextNode(
      `${tarefa.description} (${tarefa.done})`
    );
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  });
};

const getTasks = () => {
  fetch(taskUrl, { headers: headers })
    .then((res) => res.json())
    .then((data) => {
      renderizaLista(lista, data.results);
    });
};

getTasks();
