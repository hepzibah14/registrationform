function validateAlphabets(input) {
    var value = input.value;
    var newValue = "";

    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            newValue += char;
        } else {
            alert("Please enter only alphabets in the Name field.");
            break;
        }
    }
    input.value = newValue;
}

function validateDateOfBirth() {
    var input = document.getElementsByName('birth')[0];
    var value = input.value;
    var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!dateRegex.test(value)) {
        alert("Date of Birth should be in the format dd/mm/yyyy.");
        input.value = ""; 
    }
}

function validateEmail() {
    var input = document.getElementsByName('mail')[0];
    var value = input.value;

    // Simple pattern to check if "@" is present
    if (value.indexOf('@') === -1) {
        // Show alert if "@" is missing
        alert("Invalid email address. The '@' symbol is missing.");
    }
}

function validateAddress() {
    var input = document.getElementsByName('address')[0];
    var value = input.value;
    var pincodeRegex = /\d{6}$/;

    if (!pincodeRegex.test(value)) {
        alert("Address should include a 6-digit pincode.");
        input.value = ""; 
    }
}

function validateContactNumber() {
    var input = document.getElementsByName('num')[0];
    var value = input.value;
    var numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(value)) {
        alert("Contact Number should not contain alphabets.");
        input.value = ""; 
    }
}

function validateCity() {
    var input = document.getElementsByName('city')[0];
    var value = input.value;
    var numberRegex = /\d/; 
    if (numberRegex.test(value)) {
        alert("City should not contain numbers.");
        input.value = ""; 
    }
}

