//Assignment Codeas
var generateBtn = document.querySelector("#generate");

var allowUppercase;
var allowLowercase;
var allowNumbers;
var allowSpecials;
var passwordLength;
var passwordCharacterCount;
var myPasscode;
var passwords = [];
var uppercaseChars = ["ABCDEFGHIJKLMNOP"];
var lowercaseChars = ["abcdefghijklmnop"];
var numbers = [123456789]
var specialChars = ["!@#$%^&*"];
var randomStr;
var finalArr;

function randomNumberGenerator(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// This prompt statments are basically boolean statements(true or false)
// Based on true or false the boolean will apend the array the the empty variable.
// Ex. (passwords += upperChars);
function askAboutUppercase(){
    allowUppercase = confirm("Are uppercase characters allowed");
    if (allowUppercase === true ){
    passwords += uppercaseChars;
    }
    }
    
    
    function askAboutLowerCase(){
    allowLowercase = confirm("Are lowercase characters allowed");
    if(allowLowercase === true){
        passwords += lowercaseChars;
    }
}
    
    function askAboutNumbers(){
    allowNumbers = confirm("Are numbers chracters allowed ");
    if(allowNumbers === true){
        passwords += numbers;
    }
    }

    function askAboutSpecials(){
       allowSpecials = confirm("Are special characters allowed");
        if(allowSpecials === true){
            passwords += specialChars;
          
        }
        }
           
    function howManyCharacters(){
    var passwordCharacterCount = prompt("How many characters would you like in your password");
    var passwordLength = parseInt(passwordCharacterCount);
    console.log(passwordLength);
    return passwordLength
    }
   
   
    function generatePassword(){
     var finalArr = [];
     var randomStr = "";
   
     for ( var i = 1; i <= 10; i++ ){
     var randomIdx = randomNumberGenerator(1, passwords.length -1);
   var myPasscode = passwords[randomIdx];
    randomStr += myPasscode;
    finalArr.push(randomStr);
    console.log(finalArr);
     }
     return finalArr
    }
    
    
    // Write password to the #password input
    function writePassword(){  
     howManyCharacters();
      askAboutLowerCase();
      askAboutUppercase();
      askAboutSpecials();
      askAboutNumbers();

      console.log(passwords);
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    


//     var uppercaseChars = ["A", "B","C","D","E","F","G","H","I","J","K","L","L","M"];
// var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
// var numbers = [1,2,3,4,5,6,7,8,9,]
// var specialChars = ["!","@","#","$","%","^"];
// var randomStr;
// var finalArr;