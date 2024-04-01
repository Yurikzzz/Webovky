function addWord() {
    var input = document.getElementById("wordInput");
    var word = input.value.trim();
    if (word !== "") {
        var wordList = document.getElementById("wordList");
        var listItem = document.createElement("li");
        listItem.textContent = word;
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Odebrat";
        removeBtn.className = "removeBtn";
        removeBtn.onclick = function() {
            listItem.remove();
        };
        listItem.appendChild(removeBtn);
        wordList.appendChild(listItem);
        input.value = "";
    }
}