// Assignment code here


var generatePassword = function() {

  // Ask for password length
  passwordText.length();
  
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
    window.prompt("How long would you like your password? Note: passwords must be between 8 and 128 characters.");
 
    if (passwordText.length >= 8) {
      console.log(passwordText.length);
    } else {
      window.prompt("That number is invalid. Please enter another number for the length of your password. Note: passwords must be between 8 and 128 characters.");

      passwordLength();
    }
  },
}
