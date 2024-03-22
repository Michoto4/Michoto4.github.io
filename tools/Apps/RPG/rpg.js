function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()-=_+\/?,.<>";

    let allowedChars = "";
    let password = "";

    let error = document.getElementById("errorLabel")
    error.textContent = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length < 8){
        error.textContent = "Your password can't be shorter than 8 characters";
        return "error";
    }
    if(allowedChars.length === 0){
        error.textContent = "At least one set of characters needs to be selected.";
        return "error";
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


function submitButton(){
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;   
    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    let result = document.getElementById("result")
    let gpLabel = document.getElementById("gpLabel")


    if(password !== "error"){
        gpLabel.textContent = `Generated password:`
        result.textContent = `${password}`;
    }
    else{
        result.textContent = "";
    }

}