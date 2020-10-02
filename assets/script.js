// Connects the generate ID in th HTML document to the .js code. Runs the .js when the button is clicked.
var generateBtn = document.querySelector("#generate");


// Code for the arrays defining the characters that will be used in the generator. 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "(", ")", "'", "+", ",", ".", "-", "/", ":", ";", "<", ">", "?", "[", "]", "|", "_", "`", "{", "}", "~"];


// Code for the initial password prompt of password length.
function generatePassword() {
 var passwordPrompt = prompt("How many characters would you like your password to be? (Min=8; Max=128)");
  var lengthOfPassword = parseInt(passwordPrompt);
  if (passwordPrompt === null) {
    return;
  }
  else if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please choose a password between 8 and 128 characters.");
    return;
  }
  
  // Code for confirm questions about password criteria. If statement requiring the password to have at least one type of character.
  var lowerCase = confirm("Would you like lowercase characters?");
  var upperCase = confirm("Would you like uppercase?");
  var numbers = confirm("Would you like numbers?");
  var specialCharacters = confirm("Would you like special characters?");
  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert("You must chose at least 1 type of character for a password.");
    return;
  }

  // Code for connecting the arrays together. Code for the random generator.
  var options = [];
  var result = [];
  if (lowerCase === true) {
    options = options.concat(lower)
  }
  if (upperCase === true) {
    options = options.concat(upper)
  }
  if (numbers === true) {
    options = options.concat(numbersArray)
  }
  if (specialCharacters === true) {
    options = options.concat(special)
  }
  var item = options[Math.floor(Math.random() * options.length)];
  for (var i = 0; i < lengthOfPassword; i++) {
    result.push(options[Math.floor(Math.random() * options.length)]);
  }
  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);