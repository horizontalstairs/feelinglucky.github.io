function toggleDescriptionPopup() {
    var rulesButton = document.querySelector('.rules-button');
    var descriptionPopup = document.getElementById('description-popup');

    if (descriptionPopup.style.display === 'none' || descriptionPopup.style.display === '') {
        rulesButton.style.display = 'none'; // Hide the button
        descriptionPopup.style.display = 'block';
    } else {
        rulesButton.style.display = 'block'; // Show the button
        descriptionPopup.style.display = 'none';
    }
}

function closeDescriptionPopup() {
    var rulesButton = document.querySelector('.rules-button');
    var descriptionPopup = document.getElementById('description-popup');
    
    rulesButton.style.display = 'block'; // Show the button
    descriptionPopup.style.display = 'none';
}