'use strict';

var counter = 0;
var timeLeftInSeconds;
var timer = document.getElementById('timer_default');
var timerId;
var minuteSeconds;
var timeSelected = "25:00";
var timerRunning;
var successCounter = 0;

const pomodoroBtn = document.getElementById('first-top-btn');
const shortBtn = document.getElementById('short-break-btn');
const longBtn = document.getElementById('long-break-btn');

function pomodoro() {
    clearInterval(timerId);
    document.getElementById("start-bottom-btn").disabled = false;
    counter = 0;
    timerRunning = false;
    document.getElementById('timer_default').innerHTML = "25:00";
    timeSelected = document.getElementById('timer_default').innerHTML;
}

function shortBreak() {
    clearInterval(timerId);
    document.getElementById("start-bottom-btn").disabled = false;
    counter = 0;
    timerRunning = false;
    document.getElementById('timer_default').innerHTML = "05:00";
    timeSelected = document.getElementById('timer_default').innerHTML;
}

function longBreak() {
    clearInterval(timerId);
    document.getElementById("start-bottom-btn").disabled = false;
    counter = 0;
    timerRunning = false;
    document.getElementById('timer_default').innerHTML = "&nbsp;10:00";
    timeSelected = document.getElementById('timer_default').innerHTML;
}

function start() {
    document.getElementById("start-bottom-btn").disabled = true;
    timerRunning = true;
    minuteSeconds = document.getElementById('timer_default').innerHTML;
    minuteSeconds = minuteSeconds.replace('&nbsp;', '');
    convertToSeconds(minuteSeconds);
}

function convertToSeconds(minuteSeconds) {
    var split = minuteSeconds.split(':')
    var seconds = (+split[0]) * 60 + (+split[1]);
    timeLeftInSeconds = seconds;
    timeIt();
}

function timeIt() {
    timerId = setInterval(function () {
        if (timerRunning) {
            counter++;
            document.getElementById('timer_default').innerHTML = convertToMinutes(timeLeftInSeconds - counter);
        } if (counter == timeLeftInSeconds) {
            successCounter++;
            document.getElementById("start-bottom-btn").disabled = false;
            document.getElementById('alarm').play();
            timerRunning = false;
            clearInterval(timerId);
            counter = 0;
            document.getElementById('timer_default').innerHTML = timeSelected;
            if (successCounter == 1 && timeLeftInSeconds == 1500) {
                document.getElementById('spot2').src = url("https://i.ibb.co/HPyG9cm/tree3-end3.png");
            } else if (successCounter == 2 && timeLeftInSeconds == 1500) {
                document.getElementById('spot3').src = url("https://i.ibb.co/z4KfFTX/tree1-end2.png");
            } else if (successCounter == 3 && timeLeftInSeconds == 1500) {
                document.getElementById('spot4').src = url("https://i.ibb.co/z4KfFTX/tree1-end2.png");
            } else if (successCounter == 4 && timeLeftInSeconds == 1500) {
                document.getElementById('spot5').src = url("https://i.ibb.co/YkC5Yc4/tree2-end1.png");
            } else if (successCounter == 5 && timeLeftInSeconds == 1500) {
                document.getElementById('spot6').src = url("https://i.ibb.co/HPyG9cm/tree3-end3.png");
            }
        }
    }, 10)

}

function convertToMinutes(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;

    return ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
}

function pause() {
    document.getElementById("start-bottom-btn").disabled = false;
    timerRunning = false;
    clearInterval(timerId);
    counter = 0;
}

function reset() {
    timerRunning = false;
    clearInterval(timerId);
    counter = 0;
    document.getElementById('timer_default').innerHTML = timeSelected;
    document.getElementById("start-bottom-btn").disabled = false;
}

