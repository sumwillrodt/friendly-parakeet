// Assignment code here

var passwordPool = "";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "?@!#$%^&*'()_-+=:;<>[]\/`~||";



var generatePassword = function() {

  // Ask for password length
  passwordText.length();
  
  // Ask to include lowercase
  var confirmLowercase = window.confirm("Would you like to include lowercase letters?");

    if (confirmLowercase) {
      passwordPool = passwordPool.concat(lowercaseLetters);
      
    } else {
    }
  
  // Ask to include uppercase
  var confirmUppercase = window.confirm("Would you like to include Uppercase letters?");

    if (confirmUppercase) {
      passwordPool = passwordPool.concat(uppercaseLetters);

    } else {
    }

  // Ask to include numbers
  var confirmNumbers = window.confirm("Would you like to include numbers?");
    if (confirmNumbers) {
      passwordPool = passwordPool.concat(numbers);

    } else {
    }

  // Ask to include symbols
  var confirmSymbols = window.confirm("Would you like to include symbols?");

    if (confirmSymbols) {
      passwordPool = passwordPool.concat(symbols);

    } else {
    }  
  
  //generate password string
  for (var i = 0; i < passwordLength; i++) {
    password += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
    
  }
  window.alert("Your password is: " + password);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordText = {
  length: function() {
    passwordLength = window.prompt("How long would you like your password? Note: passwords must be between 8 and 128 characters.");
 
    if (passwordLength >= 8 && passwordLength <= 128) {
      console.log("The password will be " + passwordLength + " characters long.");
    } else {
      window.prompt("That number is invalid. Please enter another number for the length of your password. Note: passwords must be between 8 and 128 characters.");

    }
  } 
}