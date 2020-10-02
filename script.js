// Connects the generate ID in th HTML document to the .js code. Runs the .js when the button is clicked.
var generateBtn = document.querySelector("#generate");

    

function generatePassword() {
  var lengthOfPassword = parseInt(prompt("How many characters would you like your password to be? (Min=8; Max=128)"));
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please choose a password between 8 and 128 characters.");
    return;
  }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
