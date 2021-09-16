document.getElementById('Submit-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    let emailValue = emailInput.value;
    const passwordInput =  document.getElementById('password-input').value;
    
    if(emailValue == "mdsowrov315@gmail.com" && passwordInput == 'secret'){
            window.location.href = 'banking.html';        
    }

})