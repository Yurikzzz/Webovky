function ViewMore() {
    var hiddenText = document.getElementById('hiddenText');
    var button = document.getElementById('viewMoreButton');

    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
        button.textContent = 'Skrýt';
    } else {
        hiddenText.style.display = 'none';
        button.textContent = 'Zobrazit více';
    }
}