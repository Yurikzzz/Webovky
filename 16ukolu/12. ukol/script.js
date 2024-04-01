function changeFontSize() {
    var text = document.getElementById('text');
    var sliderValue = document.getElementById('slider').value;
    text.style.fontSize = sliderValue + 'px';
}