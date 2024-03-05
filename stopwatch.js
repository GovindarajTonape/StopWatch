let timerDisplay = document.querySelector('.timerDisplay');
let solve = document.querySelector('.solve');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');


let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});


resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        secs++;
        msec = 0;
        if(secs == 100){
            mins++;
            secs = 0;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timervalue = `${minString} : ${secsString} : ${msecString}`;
    timerDisplay.innerHTML = timervalue;
}

function show(){
    solve.innerHTML = `${minString} : ${secsString} : ${msecString}`;
}

