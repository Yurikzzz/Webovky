function showImagePopup(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeImagePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}