
var remainingAttempts = 3; // Declare remainingAttempts outside the function
var gameStarted = false;
var doorsClickable = false;
var playerName;

function startGame() {
    playerName = prompt("Got a nickname?");
    
    if (playerName) {
        initializeGame();
        document.getElementById('start-container').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        displayMessage(playerName + ", HAVE AT IT!");
    }
}
function getPlayerName() {
    playerName = prompt("Got a nickname?");
    if (playerName) {
        document.getElementById('start-container').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        initializeGame();
        displayMessage(playerName + ", HAVE AT IT!");
    }
}
function initializeGame() {
  
    doorsClickable = true;
    gameStarted = true;
    var doorContainer = document.getElementById('door-container');

    // Remove existing doors
    while (doorContainer.firstChild) {
        doorContainer.removeChild(doorContainer.firstChild);
    }   

    // Generate new doors for the first wave
    generateDoors(doorContainer);

    setTimeout(function () {
        document.getElementById('game-container').classList.add('fade-in');
    }, 100);
    

}

function generateDoors(container) {
    var winningDoorIndex = Math.floor(Math.random() * 5) + 1;

    for (let i = 1; i <= 5; i++) {
        (function (doorIndex) {
            var newDoor = document.createElement('div');
            newDoor.className = 'door';
            newDoor.textContent = 'CLICK ME!';

            if (doorIndex === winningDoorIndex) {
                newDoor.classList.add('winning-door');
            }

            container.appendChild(newDoor);

            // Set the initial click event
            setDoorClickEvent(newDoor, doorIndex, winningDoorIndex);
        })(i);
    }
    
    console.log("Doors generated.");
}

function setDoorClickEvent(doorElement, doorIndex, winningDoorIndex) {
    doorElement.onclick = function () {
        checkResult(doorIndex, winningDoorIndex, doorElement);
    };
}

function checkResult(selectedDoor, winningDoor, doorElement) {


    if (!doorsClickable || !gameStarted) {
       
        return;
    }
    
    console.log("Conditions met:", { doorsClickable, gameStarted, playerName });
    var doors = document.querySelectorAll('.door');

    doors.forEach(function (door) {
        if (door === doorElement) {
            door.classList.add('selected-door');

            if (selectedDoor === winningDoor) {
                door.classList.add('winning-door-clicked');
                var customMessage = 'Congratulations ' + playerName + '! You won!';
                openCustomAlert(customMessage);
            } else {
                door.classList.add('wrong-door');
                remainingAttempts--;

                if (remainingAttempts <= 0) {
                    remainingAttempts = 0;
                    openCustomAlert('Sorry, you didn\'t win. No more attempts left. Try again!');
                    endGame();
                } else {
                    openCustomAlert('Sorry, you didn\'t win. You have ' + remainingAttempts + ' attempts left. Try again!');
                }
            }
        }
    });

    if (remainingAttempts === 0) {
        endGame();
    }

    // Set the click events again after checking the result
    
}





function endGame() {
    var doors = document.querySelectorAll('.door');
    doors.forEach(function (door) {
        door.onclick = null;
    });
}

function openCustomAlert(message) {
    var customAlert = document.getElementById('custom-alert');
    var alertMessage = document.getElementById('alert-message');

    alertMessage.textContent = message;
    customAlert.style.display = 'block';
}

function closeCustomAlert() {
    var customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'none';
}

function restartGame() {
    location.reload(); // Reload the page to restart the game
}
