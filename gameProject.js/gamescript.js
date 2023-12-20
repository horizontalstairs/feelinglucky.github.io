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