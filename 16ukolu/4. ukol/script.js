function CheckEmail(event) {
    event.preventDefault();
    
    var email = document.getElementById('emailInput').value;
    
    if (email.includes('@')) {
        document.getElementById('result').innerHTML = 'Odesláno';
    } else {
        document.getElementById('result').innerHTML = 'Zadej prosím platný email!';
    }
}