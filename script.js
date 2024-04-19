var timerInterval;
var hoursInput = document.getElementById('hours');
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
var timerDisplay = document.getElementById('timerDisplay');

function startTimer() {
    var totalSeconds = 
    parseInt(hoursInput.value) * 3600 + 
    parseInt(minutesInput.value) * 60 + 
    parseInt(secondsInput.value);

    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
        } else {
            var hours = Math.floor(totalSeconds / 3600);
            var minutes = Math.floor((totalSeconds % 3600) / 60);
            var seconds = totalSeconds % 60;
            timerDisplay.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            totalSeconds-- ;
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