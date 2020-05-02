const clockContainer = document.querySelector(".jsClock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function printTime() {
  const currentTime = getTime();
  clockTitle.innerText = currentTime;
}

function init() {
  getTime();
  printTime();
  setInterval(printTime, 1000);
}

init();
