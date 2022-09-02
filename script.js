//Assignment Code
var generateBtn = document.querySelector("#generate");

var allowUpperCase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var interger;
var passwordCharacterCount;

var uppercaseChars = ["A", "B","C","D","E","F","G","H","I","J","K","L","L","M"];
var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
var numbers = [1,2,3,4,5,6,7,8,9,]
var allowSpecials = ["!","@","#","$","%","^"];





function askAboutUppercase(){
    allowUppercase = confirm("Are uppercase characters allowed");
    console.log(allowUppercase)
    }
    
    function askAboutLowerCase(){
    allowLowercase = confirm("Are lowercase characters allowed");
    console.log(allowLowercase)
    }
    
    function askAboutNumbers(){
    allowNumbers = confirm("Are numbers chracters allowed ");
    var interger = parseInt(allowNumbers);
    // var interger = parseInt(allowNumbers);
    console.log(interger)
    
    }
    
    function howManyCharacters(){
    var passwordCharacterCount = ("How many characters would you like in your password")
    }
    
    function askAboutSpecials(){
    allowSpecials = confirm("Are specials chracters allowed");
    console.log(allowSpecials);
    }
    
    
    function generatePassword(){
     
    }
    
    // Write password to the #password input
    function writePassword() {
      askAboutLowerCase();
      askAboutUppercase();
      askAboutNumbers();
      askAboutSpecials();
    
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    
  