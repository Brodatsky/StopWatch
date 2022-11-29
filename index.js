let list = document.getElementById("list");
let clockface = document.getElementById("clockface");
let Tens = document.getElementById("tens");
let Seconds = document.getElementById("seconds");
let startBtn = document.querySelector(".btn-start");
let resetBtn = document.querySelector(".btn-reset");
let clearBtn = document.querySelector(".btn-clear");
let saveBtn = document.querySelector(".btn-save");
let Interval;

let tens = 00,
  seconds = 00,
  minutes = 00,
  init = 0;
// clockface.textContent = readout;

//Функция запуска и остановки
function StartStop() {
  if (init == 0) {
    init = 1;
    startBtn.textContent = `Stop`;
    clearInterval(Interval);
    Interval = setInterval(startStopwatch, 10);
  } else {
    init = 0;
    clearInterval(Interval);
    startBtn.textContent = `Start`;
    // createNewElement();
  }
}

function startStopwatch() {
  tens++;

  if (tens <= 9) {
    Tens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    Tens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    Seconds.innerHTML = "0" + seconds;
    tens = 0;
    Tens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    Seconds.innerHTML = seconds;
  }
}

startBtn.addEventListener("click", () => {
  StartStop();
});

// Кнопка ресета
resetBtn.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  init = 0;
  startBtn.textContent = "Start";

  Tens.innerHTML = tens;
  Seconds.innerHTML = tens;
});

// function createNewElement() {
//   let li = document.createElement("li");
//   let txt = document.createElement("span");

//   txt.append(readout);

//   ol.appendChild(li).append(txt);
// }

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
//   let listForCookie = list.innerHTML;
//   setCookie("List", listForCookie, 1);
// });

// clearBtn.addEventListener("click", function () {
//   list.innerHTML = "";
//   deleteCookie("List");
// });

// function loadTodo() {
//   list.innerHTML = getCookie("List");
// }

// loadTodo();
// console.log(loadTodo);
