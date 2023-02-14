let counter = 0;
let result = document.getElementById("result");
let timerStarted = false;
let timerInterval;

function count() {
    counter += 1;
    result.innerHTML = counter + " cps";
    
}

let TIMER_DURATION = 20;

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Time left : ${TIMER_DURATION} seconds`;
    TIMER_DURATION--;
    if (TIMER_DURATION < 0) {
        clearInterval(timerInterval);
        timerElement.innerText = 'Times UP !';

        let cps = counter/20
        let cpss = document.getElementById("cps")
        cpss.innerHTML = "You maked " + cps + " click per second"
    }
}

function startTimer() {
    if (!timerStarted) {
        timerStarted = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

const startButton = document.getElementById('clickbox');
startButton.addEventListener('click', startTimer);


function reset () {
    counter = 0
    TIMER_DURATION = 20
    document.getElementById("timer").innerHTML = ""
    document.getElementById("cps").innerHTML = ""
    timerStarted = false;
    document.getElementById("result").innerHTML = ""
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => dot.remove());
    colorIndex = 0;
}

const resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);


  
const colors = [
    'hsl(240, 94%, 26%)',
    'hsl(190, 86%, 23%)',
    'hsl(180, 89%, 45%)',
    'hsl(240, 100%, 50%)',
    'hsl(238, 77%, 32%)'
  ];
  let colorIndex = 0;
  
  function addDot(event) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${event.clientY - 5}px`;
    dot.style.left = `${event.clientX - 5}px`;
    dot.style.backgroundColor = colors[colorIndex];
    document.getElementById('clickbox').appendChild(dot);
    colorIndex = (colorIndex + 1) % colors.length;
  }
  
  document.getElementById('clickbox').addEventListener('click', addDot);