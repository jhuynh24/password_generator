// Connects the generate ID in th HTML document to the .js code. Runs the .js when the button is clicked.
var generateBtn = document.querySelector("#generate");

    

function generatePassword() {
  var lengthOfPassword = parseInt(prompt("How many characters would you like your password to be? (Min=8; Max=128)"));
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please choose a password between 8 and 128 characters.");
    return;
  }
  
  var lowerCase = confirm("Would you like lowercase characters?");
  var upperCase = confirm("Would you like uppercase?");
  var numbers = confirm("Would you like numbers?");
  var specialCharacters = confirm("Would you like special characters?");
  if(lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert("You must chose at least 1 type of character for a password.");
    return;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
