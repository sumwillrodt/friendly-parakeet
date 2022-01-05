// Assignment code here
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "?@!#$%^&*'()_-+=:;<>[]`~||";

var generatePassword = function() {

  var passwordPool = "";

  // Ask for password length
  var passwordText = {
    length: function() {
      passwordLength = window.prompt("How long would you like your password? Note: passwords must be between 8 and 128 characters.");
   
      if (passwordLength >= 8 && passwordLength <= 128) {
        alert("The password will be " + passwordLength + " characters long.");
      } else {
        window.prompt("That number is invalid. Please enter another number for the length of your password. Note: passwords must be between 8 and 128 characters.");
      }
    } 
  }

  passwordText.length();
  
  // Ask to include lowercase
  var confirmLowercase = window.confirm("Would you like to include lowercase letters?");
  if (confirmLowercase === true) {
    passwordPool += lowercaseLetters;
  } else {
  }
  
  // Ask to include uppercase
  var confirmUppercase = window.confirm("Would you like to include Uppercase letters?");
  if (confirmUppercase  === true) {
    passwordPool += uppercaseLetters;
  } else {
  }

  // Ask to include numbers
  var confirmNumbers = window.confirm("Would you like to include numbers?");
  if (confirmNumbers  === true) {
    passwordPool += numbers;
  } else {
  }

  // Ask to include symbols
  var confirmSymbols = window.confirm("Would you like to include symbols?");
  if (confirmSymbols  === true) {
    passwordPool += symbols;
  } else {
  }  
  
  //generate password string
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
  }
  return password;
  //console.log(password);
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

