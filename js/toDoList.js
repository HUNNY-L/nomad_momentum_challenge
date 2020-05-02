const toDoForm = document.querySelector(".jsToDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".jsToDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const icon = btn.parentNode;
  const li = icon.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function handleStrike(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  span.classList.toggle("strike");
  const position = li.id - 1;
  if (toDos[position].checked) {
    toDos[position].checked = false;
  } else {
    toDos[position].checked = true;
  }
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printToDos(text, isChecked) {
  const li = document.createElement("li");
  const strikeBtn = document.createElement("input");
  strikeBtn.type = "checkbox";
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  delBtn.addEventListener("click", deleteToDo);
  strikeBtn.addEventListener("change", handleStrike);
  span.innerText = text;
  li.appendChild(strikeBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  if (isChecked === undefined || isChecked === false) {
    const toDoObj = {
      text,
      id: newId,
      checked: false
    };
    toDos.push(toDoObj);
  } else {
    const toDoObj = {
      text,
      id: newId,
      checked: true
    };
    toDos.push(toDoObj);
    span.classList.add("strike");
    strikeBtn.checked = true;
  }
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDos(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTodos = JSON.parse(loadedToDos);
    console.log(parsedTodos);
    parsedTodos.forEach(function(toDoObj) {
      console.log(toDoObj.checked);
      printToDos(toDoObj.text, toDoObj.checked);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
