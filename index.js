let startBtn = document.querySelector(".btn-start");

let resetBtn = document.querySelector(".btn-reset");
let clockface = document.getElementById("clockface");

let ms = 0,
  s1 = 0,
  s2 = 0,
  m1 = 0,
  m2 = 0,
  h1 = 0,
  h2 = 0,
  init = 0;

function Tick() {
  if (init == 1) {
    let readout = h2 + h1 + ":" + m2 + m1 + ":" + s2 + s1 + "." + ms;
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
    Tick();
  } else {
    init = 0;
  }
}

startBtn.addEventListener("click", () => {
  StartStop();
  startBtn.textContent = "stop";
});
