var words = [];

function addWord() {
    var word = document.getElementById('wordInput').value.trim();
    
    if (word !== '') {
        words.push(word);
        displayWords();
        document.getElementById('wordInput').value = '';
    }
}

function displayWords() {
  var wordListContainer = document.getElementById('wordList');
  wordListContainer.innerHTML = '';
  
  for (var i = 0; i < words.length; i++) {
      var wordItem = document.createElement('div');
      wordItem.textContent = words[i];
      wordListContainer.appendChild(wordItem);
  }
}