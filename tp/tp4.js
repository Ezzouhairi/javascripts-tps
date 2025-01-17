function splitName() {
     var fullName = document.getElementById('fullName').value;
     var spaceIndex = fullName.indexOf(' ');
     var lastName = fullName.slice(0, spaceIndex);
     var firstName = fullName.slice(spaceIndex );

     document.getElementById('lastName').innerText = 'Nom: ' + lastName;
     document.getElementById('firstName').innerText = 'Prénom: ' + firstName;}