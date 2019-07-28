window.onload = function(){ 
    let modal = document.getElementById("emailModal");

    let btn = document.getElementById("modalButton");

    let span = document.getElementsByClassName("close-modal")[0];

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}