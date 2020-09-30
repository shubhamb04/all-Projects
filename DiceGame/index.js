var startGame = document.getElementById("startGame");
var container = document.getElementById("container");
var landingBox = document.getElementById("landingBox");

let message = document.getElementById("message");
startGame.addEventListener('click', function() {
    let playerOne = document.getElementById("playerOne").value;
    let playerTwo = document.getElementById("playerTwo").value;

    message.textContent = playerOne + "'s turn";
    landingBox.style.display = "none";
})