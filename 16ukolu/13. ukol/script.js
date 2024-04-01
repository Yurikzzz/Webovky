function updateTimer() {
    var timer = document.getElementById('timer');
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    timer.textContent = timeString;
}

setInterval(updateTimer, 1000);

updateTimer();