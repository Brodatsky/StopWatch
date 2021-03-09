let startBtn = document.querySelector(".btn-start");
let stopBtn = document.querySelector(".btn-stop");
let resetBtn = document.querySelector(".btn-reset");
let clockface = document.getElementById("clockface");

startBtn.addEventListener("click", function () {
  startBtn.classList.toggle("btn-success");
});

let ms = 0,
  s1 = 0,
  s2 = 0,
  m1 = 0,
  m2 = 0,
  h1 = 0,
  h2 = 0;

setInterval(function () {
  clockface.textContent = h2 + h1 + ":" + m2 + m1 + ":" + s2 + s1 + "." + ms;
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
}, 10);
