//Random Password Generator Program

function generatePassword(){

    //Getting input from the User
    const length = document.getElementById("length").value;
    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeUpperCase = document.getElementById("includeUpperCase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const pass = document.getElementById("pass");


    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if(length == 0){
        pass.textContent = `password length must be at least 1`;
    }
    if (allowedChars.length === 0){
        pass.textContent = `At least 1 set of character needs to be selected`;
    }

    if (length != 0 && allowedChars.length !== 0){

        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex]; 
        }
    
        pass.textContent = `Password : ${password}`;
    }
    
}