const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const textHeader = document.querySelector(".text-header");
const imgSvg = document.querySelector(".quandary-logo");
const tooltip = document.querySelector(".tooltip-text");

const shrinkTimerFont = "2.5rem";
let startDate = new Date("November 18 2024 00:00:00");
let endDate = new Date("November 23 2024 00:00:00");

const updateTimer = () => {
  const currentTime = new Date();

  // Event has ended, reset everything to 0 and shrink the timer
  if (currentTime >= endDate) {
    textHeader.textContent = "Dreamland's gates have gently drifted shut.";
    days.style.fontSize = shrinkTimerFont;
    hours.style.fontSize = shrinkTimerFont;
    mins.style.fontSize = shrinkTimerFont;
    secs.style.fontSize = shrinkTimerFont;
    resetTimer();
    return;
  }

  const diff = startDate - currentTime;
  
  // Change the timer to the event days and extend the time
  if (diff <= 0) {
    textHeader.textContent = "The gates of dreamland are wide open!"; 
    startDate = endDate;
    // showTooltip();
    resetTimer();
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const day = Math.floor(totalSeconds / (24 * 3600));
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;

  days.innerHTML = day < 10 ? `0${day}` : day;
  hours.innerHTML = hour < 10 ? `0${hour}` : hour;
  mins.innerHTML = min < 10 ? `0${min}` : min;
  secs.innerHTML = sec < 10 ? `0${sec}` : sec;
};

const resetTimer = () => {
  days.innerHTML = "00";
  hours.innerHTML = "00";
  mins.innerHTML = "00";
  secs.innerHTML = "00";
}

const showTooltip = () => {
  imgSvg.href = "https://quandary-main.vercel.app/";
  imgSvg.target = "_blank";
  tooltip.style.visibility = "visible";
  textHeader.style.top = "20%";
}

updateTimer();

setInterval(updateTimer, 1000);
