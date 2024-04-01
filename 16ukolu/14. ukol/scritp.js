function filterList(category) {
    var items = document.querySelectorAll('.listItem');
    items.forEach(function(item) {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}