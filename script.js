let timerInterval;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timerDisplay');

function startTimer() {
    let totalSeconds = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
        } else {
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            timerDisplay.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            totalSeconds--;
        }
    }, 1000);
}
function pauseTimer() {
    clearInterval(timerInterval);
}
function resetTimer() {
    clearInterval(timerInterval);
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
    timerDisplay.innerText = '';
}