var timer = document.getElementById('timer');
var countdown;

function startTimer() {
    var count = 10;
    timer.textContent = count;

    countdown = setInterval(function() {
        count--;
        if (count >= 0) {
            timer.textContent = count;
        } else {
            clearInterval(countdown);
            timer.textContent = 'Čas vypršel!';
        }
    }, 1000);
}