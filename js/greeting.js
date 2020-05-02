const form = document.querySelector(".jsForm"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".jsGreeting");

const USERNAME_LS = "userName",
  SHOWING_CN = "showing";

const hellos = [
  "Have a nice day.",
  "Today’s going to be a great day! ",
  "I believe in you.",
  "Prove them wrong.",
  "Have a safe day",
  "Have a rock n’ roll day!",
  "Be yourself."
];

function randomNumGen() {
  HELLO_NUM = hellos.length;
  num = Math.floor(Math.random() * HELLO_NUM);
  return num;
}

function printGreeting(name) {
  const randomNum = randomNumGen();
  const randomHi = hellos[randomNum];
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello, ${name}. ${randomHi}`;
}

function saveName(name) {
  localStorage.setItem(USERNAME_LS, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const submitedName = input.value;
  printGreeting(submitedName);
  saveName(submitedName);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const loadedName = localStorage.getItem(USERNAME_LS);
  if (loadedName === null) {
    askForName();
  } else {
    printGreeting(loadedName);
  }
}

function init() {
  loadName();
}

init();
