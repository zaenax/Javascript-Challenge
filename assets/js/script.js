// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("Enter the length of your desired password."));

  if(isNaN(length) || length<8 || length >128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return;
  }

  var includeUppercase = confirm('Include uppercase letters?');
  var includeLowercase = confirm('Include lowercase letters?');
  var includeNumbers = confirm ('Include numbers?');
  var includeSpecialChars = confirm ('Include special characters?');

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=?";

  var allChars = "";
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSpecialChars) allChars += specialChars;

  if (allChars === "") {
    alert('Please Select at least one character set.');
    return;
  }

  var password = "";
  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert('Your generated password is :\n' + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
