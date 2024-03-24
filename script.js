let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let time = [0, 0, 0, 0];
let laps = [];

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = true;
  }
}

function stopTimer(){
  if(running){
    clearInterval(tInterval);
    running = false;
  }
}

function resetTimer(){
  clearInterval(tInterval);
  running = false;
  time = [0, 0, 0, 0];
  laps = [];
  document.getElementById('display').innerHTML = "00:00:00";
  document.getElementById('laps').innerHTML = "";
}

function getShowTime(){
  updatedTime = new Date().getTime();
  difference =  updatedTime - startTime;

  time[0] = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  time[1] = Math.floor((difference % (1000 * 60)) / 1000);
  time[2] = Math.floor((difference % (1000)) / 10);

  time[0] = (time[0] < 10) ? "0" + time[0] : time[0];
  time[1] = (time[1] < 10) ? "0" + time[1] : time[1];
  time[2] = (time[2] < 10) ? "0" + time[2] : time[2];

  document.getElementById('display').innerHTML = time[0] + ":" + time[1] + ":" + time[2];
}

function recordLap(){
  if(running){
    let lapTime = time.join(':');
    laps.push(lapTime);
    let lapList = document.getElementById('laps');
    let newLap = document.createElement('li');
    newLap.innerText = 'Lap ' + laps.length + ': ' + lapTime;
    lapList.appendChild(newLap);
  }
}