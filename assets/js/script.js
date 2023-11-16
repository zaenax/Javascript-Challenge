// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("Enter the length of your desired password."));

  if(isNaN(length) || length<8 || length >128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return null;
  }

  return length;
}

function getCharacterSet(promptMessage, characterSet) {
  return confirm(promptMessage) ? characterSet : '';
}


function generatePassword() {
  var length = writePassword();

  if(length === null){

    return null;
  }


  var includeUppercase = getCharacterSet('Include uppercase letters?', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  var includeLowercase = getCharacterSet('Include lowercase letters?', 'abcdefghijklmnopqrstuvwxyz');
  var includeNumbers = getCharacterSet ('Include numbers?', '0123456789');
  var includeSpecialChars = getCharacterSet ('Include special characters?', '!@#$%^&*()_-+=?');
  
  var allChars = includeUppercase + includeLowercase + includeNumbers + includeSpecialChars;

  if (allChars === ""){
    alert('Please select at least one characterset.');
    return null;
  }

  var password = "";
  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;

}

function displayPassword(){
  var password = generatePassword();

  if(password !== null){
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    alert('Your generated password is :\n' + password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);
