const lista = document.getElementById("lista");

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
  fetch("https://parseapi.back4app.com/classes/Task", {
    headers: {
      "X-Parse-Application-Id": "RkjwBkfNZRERi3k4FVjojkTgLLe6CbbTPbW4qrQo",
      "X-Parse-REST-API-Key": "wmn69SVNaLq6UoW177InOj1tnXUsy2fkfvtHagdu",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      renderizaLista(lista, data.results);
    });
};

getTasks();
