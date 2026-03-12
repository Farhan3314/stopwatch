const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime = 0;
let elapsed = 0;
let interval;

function startTimer() {
    console.log("Start Timer");
    startTime = Date.now() - elapsed;
    interval = setInterval(() => {
        elapsed = Date.now() - startTime;
        timer.textContent = formatTime(elapsed);
    }, 10);

    start.disabled = true;
    stop.disabled = false;
}

function formatTime(time) {
    let ms = Math.floor((time % 1000) / 10);
    let sec = Math.floor((time % 60000) / 1000);
    let min = Math.floor((time % 3600000) / 60000);
    let hr = Math.floor(time / 3600000);

    return (
        String(hr).padStart(2, "0") + ":" +
        String(min).padStart(2, "0") + ":" +
        String(sec).padStart(2, "0") + ":" +
        String(ms).padStart(2, "0")
    );
}

function stopTimer() {
    console.log("Stop Timer");
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true;
}

function resetTimer() {
    console.log("Reset Timer");
    clearInterval(interval);
    elapsed = 0;
    timer.textContent = "00:00:00:00";
    start.disabled = false;
    stop.disabled = true;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
