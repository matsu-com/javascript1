let timeElement = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let elapsed = 0;

let interval = null;

function time() {
  let milli = elapsed % 1000;
  let seconds = Math.floor(elapsed / 1000) % 60;
  let minutes = Math.floor(elapsed / (1000 * 60)) % 60;
  let hours = Math.floor(elapsed / (1000 * 60 *60));

  let m = milli.toString().padStart(1, '0');
  let s = seconds.toString().padStart(1, '0');
  let min = minutes.toString().padStart(1, '0');
  let h = hours.toString().padStart(1, '0');

  timeElement.innerHTML = `${h}:${min}:${s}.${m.slice(-1)}`
;}

start.addEventListener('click', function(e) {
  if (interval !== null) { return; }
  let pre = new Date();

  interval = setInterval(function() {
    let now = new Date();
    elapsed += now - pre;
    pre = now;
    time();
  }, 10);
});

stop.addEventListener('click', function(e) {
  clearInterval(interval);
  interval = null;
});

reset.addEventListener('click', function(e) {
  elapsed = 0;
  time();
});