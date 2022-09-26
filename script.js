//Assignment Codeas
var generateBtn = document.querySelector("#generate");

var allowUppercase;
var allowLowercase;
var allowNumbers;
var allowSpecials;
var passwordLength;
var passwordCharacterCount;
var myPasscode;
var passwords;
var uppercaseChars = ["ABCDEFGHIJKLMNOP"];
var lowercaseChars = ["ABCDEFGHIJKLMNOP"];
var numbers = [123456789];
var specialChars = ["!@#$%^&*^&*()"];
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
          

    //Ask for how many chracters you would like 
    // If inputs less than 8 or more than 125 it will give another prompt to re-enter
    function howManyCharacters(){
    passwordCharacterCount = prompt("How many characters would you like in your password");
     passwordLength = parseInt(passwordCharacterCount);
    if(passwordLength < 8 || passwordLength > 125){
        var passwordCharacterCount = prompt("re-enter a number between 8 and 100");
        passwordLength = parseInt(passwordCharacterCount);
    }  return passwordLength
    }
   
    

    function generatePassword(){
     var finalArr = [];
     var randomStr = "";
  //Loops through the function a specified amount time based on your choice
     for ( var i = 1; i <= passwordLength; i++ ){
         //creates a random index generator 
     var randomIdx = randomNumberGenerator(1, passwords.length -1);
     // Takes the passwords array with random index and assigns it to a var 
   var myPasscode = passwords[randomIdx];
   // adds the myPasscode results to random str...
    randomStr += myPasscode;
 
     }
     //once the random str is created it is pushed to the finalArr
     finalArr.push(randomStr);
     return finalArr
    }
    
    
    // Write password to the #password input
    function writePassword(){  
     howManyCharacters();
     
      askAboutUppercase();
      askAboutSpecials();
      askAboutNumbers();
      askAboutLowerCase();
     
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    


