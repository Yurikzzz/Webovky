function addItem(event) {
    event.preventDefault(); 
    
    var newItemInput = document.getElementById('newItem');
    var newItemValue = newItemInput.value.trim();
    
    if (newItemValue !== '') {
        var list = document.getElementById('listItems');
        var newItem = document.createElement('li');
        newItem.textContent = newItemValue;
        list.appendChild(newItem);
        
        newItemInput.value = '';
    }
}

document.getElementById('listItems').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});