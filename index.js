const list = document.querySelector(".list");
const clockface = document.getElementById("clockface");
const clockfaceReadout = document.querySelector(".clockface-readout");
const appMilliseconds = document.querySelector(".milliseconds");
const appSeconds = document.querySelector(".seconds");
const appMinutes = document.querySelector(".minutes");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");
const clearBtn = document.querySelector(".btn-clear");
const saveBtn = document.querySelector(".btn-save");
const svgBody = document.querySelector(".svg-body");
const svgPath = document.querySelector(".svg-path");

// Показания секундомера
let milliseconds = "00";
let seconds = "00";
let minutes = "00";

//Переключатель для кнопки start/stop
let btnStatus = 0;
//Переменная для хранения (setInterval) тика секундомера
let interval;

// Поведение SVG
function playSVG() {
  svgBody.classList.add("svg-body_animation-run");
  svgPath.classList.add("svg-path_run");
  svgBody.classList.remove("svg-body_animation-none");
}

function stopSVG() {
  svgBody.classList.remove("svg-body_animation-run");
}

function resetSVG() {
  svgPath.classList.remove("svg-path_run");
  svgBody.classList.add("svg-body_animation-none");
}

// Функция запуска и остановки
function toStartStop() {
  if (btnStatus === 0) {
    playSVG();
    btnStatus = 1;
    startBtn.textContent = `Stop`;
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
  } else if (btnStatus === 1) {
    stopSVG();
    btnStatus = 0;
    clearInterval(interval);
    startBtn.textContent = `Start`;
    createNewTimestamp();
  }
}

// Логика секундомера
function startStopwatch() {
  milliseconds++;
  if (milliseconds <= 9) {
    appMilliseconds.textContent = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    appMilliseconds.textContent = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    appSeconds.textContent = "0" + seconds;
    milliseconds = 0;
    appMilliseconds.textContent = "0" + 0;
  }
  if (seconds > 9) {
    appSeconds.textContent = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appMinutes.textContent = "0" + minutes;
    seconds = 0;
    appSeconds.textContent = "0" + 0;
  }
  if (minutes > 9) {
    appMinutes.textContent = minutes;
  }
}

// Кнопка старта
startBtn.addEventListener("click", () => {
  toStartStop();
});

// Кнопка ресета
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  milliseconds = "00";
  seconds = "00";
  minutes = "00";
  btnStatus = 0;
  startBtn.textContent = "Start";
  resetSVG();

  appMilliseconds.textContent = milliseconds;
  appSeconds.textContent = seconds;
  appMinutes.textContent = seconds;
});

function createNewTimestamp() {
  let li = document.createElement("li");
  let txt = document.createElement("span");
  txt = clockfaceReadout.cloneNode(true);
  txt.classList.remove("clockface-readout");
  list.appendChild(li).append(txt);
}

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function deleteCookie(name) {
//   setCookie(name, "", {
//     "max-age": -1,
//   });
// }

// saveBtn.addEventListener("click", function () {
//   let listForCookie = list.textContent;
//   setCookie("List", listForCookie, 1);
// });

// clearBtn.addEventListener("click", function () {
//   list.textContent = "";
//   deleteCookie("List");
// });

// function loadTodo() {
//   list.textContent = getCookie("List");
// }

// loadTodo();
// console.log(loadTodo);
