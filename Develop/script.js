// Assignment code here
function generatePassword () {
  //alphabet, num, special characters
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";

  // enter desired length
  var passLength = window.prompt("Enter the desired password length:");
  
  // if length is less than 8 or more than 128 try again
  if (passLength < 8 || passLength > 128) {
    window.alert("I'm sorry. That is not a valid length. Please try again.");
  } else {
    //does user want lowercase, uppercase, special characters, etc?
    var smallLetters = window.prompt("Do you want lowercase characters in your password? Enter Y/N");
    var bigLetters = window.prompt("Do you want uppercase characters in your password? Enter Y/N");
    var specialChar = window.prompt("Do you want special characters in your password? Enter Y/N");
    var numeric = window.prompt("Do you want numbers in your password? Enter Y/N");

    smallLetters = smallLetters.toUpperCase();
    bigLetters = bigLetters.toUpperCase();
    specialChar = specialChar.toUpperCase();
    numeric = numeric.toUpperCase();

    if(smallLetters != "Y" &&
      bigLetters != "Y" &&
      specialChar != "Y" &&
      numeric != "Y") {
        //user didn't choose at least one criteria
        alert("I'm sorry. You didn't meet the criteria for a password. Please go back and choose at least one option.");

    } else if () {
        

    }

  }
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
