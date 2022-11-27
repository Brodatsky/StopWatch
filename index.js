let startBtn = document.querySelector(".btn-start");
let ol = document.getElementById("list");
let resetBtn = document.querySelector(".btn-reset");
let clockface = document.getElementById("clockface");
let clearBtn = document.querySelector(".btn-clear");
let saveBtn = document.querySelector(".btn-save");

let ms = 0,
  s1 = 0,
  s2 = 0,
  m1 = 0,
  m2 = 0,
  h1 = 0,
  h2 = 0,
  init = 0,
  readout = "0:00:00.0";
clockface.textContent = readout;

// Кнопка ресета
resetBtn.addEventListener("click", () => {
  (ms = 0),
    (s1 = 0),
    (s2 = 0),
    (m1 = 0),
    (m2 = 0),
    (h1 = 0),
    (h2 = 0),
    (init = 0),
    (readout = "0:00:00.0");
  startBtn.textContent = "Start";
  clockface.textContent = readout;
});

function Tick() {
  if (init == 1) {
    readout = h2 + h1 + ":" + m2 + m1 + ":" + s2 + s1 + "." + ms;
    clockface.textContent = readout;
    ms++;
    if (ms > 9) {
      s1++;
      ms = 0;
    }
    if (s1 > 9) {
      s2++;
      s1 = 0;
    }
    if (s2 > 5) {
      m1++;
      s2 = 0;
    }
    if (m1 > 9) {
      m2++;
      m1 = 0;
    }
    if (m2 > 5) {
      h1++;
      m2 = 0;
    }
    if (h1 > 9) {
      h2++;
      m1 = 0;
    }
    let timerTick = setTimeout(function () {
      Tick();
      if (init == 0) {
        clearTimeout(timerTick);
      }
    }, 100);
  }
}

//Функция запуска и остановки
function StartStop() {
  if (init == 0) {
    init = 1;
    startBtn.textContent = `Stop`;
    Tick();
  } else {
    init = 0;
    startBtn.textContent = `Start`;
    createNewElement();
  }
}

function createNewElement() {
  let li = document.createElement("li");
  let txt = document.createElement("span");

  txt.append(readout);

  ol.appendChild(li).append(txt);
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

startBtn.addEventListener("click", () => {
  StartStop();
});

saveBtn.addEventListener("click", function () {
  let listForCookie = ol.innerHTML;
  setCookie ("List", listForCookie,1)
});

clearBtn.addEventListener("click", function () {
  ol.innerHTML = "";
  deleteCookie("List")
});

function loadTodo() {
  ol.innerHTML = getCookie ("List");
}

loadTodo();
console.log(loadTodo);