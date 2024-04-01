var square = document.getElementById('square');
var isMoving = false;
var direction = 1;
var intervalId;

function startMoving() {
    if (!isMoving) {
        isMoving = true;
        intervalId = setInterval(moveSquare, 1);
    }
}

function moveSquare() {
    var currentLeft = parseInt(square.style.left) || 0;
    var newPosition = currentLeft + direction;

    if (newPosition >= window.innerWidth - 50 || newPosition <= 0) {
        direction *= -1;
    }

    square.style.left = newPosition + 'px';
}