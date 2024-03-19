function redirectToEmail() {
    window.location.href = "mailto:athith2k2@gmail.com";
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the close button
var close = document.getElementsByClassName("close")[0];

// Show the modal
modal.style.display = "block";

// When the user clicks on the close button, close the modal
close.onclick = function() {
    modal.style.display = "none";
}


    var showBtn = document.getElementById("showBtn");
    var qualificationsModal = document.getElementById("qualificationsModal");
    var closeBtn = document.getElementsByClassName("closeBtn")[0];

    showBtn.onclick = function() {
    qualificationsModal.style.display = "block";
};

    closeBtn.onclick = function() {
    qualificationsModal.style.display = "none";
};

    window.onclick = function(event) {
    if (event.target == qualificationsModal) {
    qualificationsModal.style.display = "none";
}
}



