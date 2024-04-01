var words = ['jablko', 'banán', 'třešeň', 'pomeranč', 'hruška', 'meloun', 'ananas', 'jahoda', 'meruňka', 'borůvka', 'malina', 'černý rybíz', 'jahoda', 'mango', 'kiwi', 'citron', 'švestka', 'malina', 'rybíz', 'granátové jablko'];

function showSuggestions() {
    var input = document.getElementById('textInput').value.trim().toLowerCase();
    var suggestionsList = document.getElementById('suggestions');

    suggestionsList.innerHTML = '';

    if (input !== '') {
        var matchingWords = words.filter(function(word) {
            return word.startsWith(input);
        });

        matchingWords.forEach(function(word) {
            var listItem = document.createElement('li');
            listItem.textContent = word;
            
            listItem.addEventListener('click', function() {
                document.getElementById('textInput').value = word;
                suggestionsList.innerHTML = ''; 
            });
            
            suggestionsList.appendChild(listItem);
        });
    }
}