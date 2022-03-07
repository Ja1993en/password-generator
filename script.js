// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
// Provided by instructor

var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar= ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var resultArray = [];
var userArray = [];

uppercaseArray [1] 
// Provided by instructor
var passwordCharacterCount = prompt ("How much number of Character you want between 8 and 128?");
  var allowNumbers = confirm ("you want numbers in your password?");
  var allowUppercases = confirm ("you want Uppercases in your password?");
  var allowLowercases = confirm ("you want lowercases in your password?");
  var allowSpecialchar = confirm ("you want special characters in your password?");


// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.
if (numbers){
  resultArray = resultArray.concat(allowNumbers);
  
}

if (uppercases){
  resultArray = resultArray.concat(allowUppercases);

}

if (lowercases){
  resultArray = resultArray.concat(allowLowercases);

}

if (characters){
  resultArray = resultArray.concat(allowSpecialchar);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
// function generatePassword(){
  // var finalResult = ""

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together


  // return finalResult;
// }

// Write password to the #password input
function writePassword() {

  // ask the questions first
  // askAboutUppercase();




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);