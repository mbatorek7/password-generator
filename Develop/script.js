// Assignment code here
function generatePassword () {
  //alphabet, num, special characters
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var password = "";

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
    } else if (smallLetters == "Y") { //check if lowercase was a chosen criteria
        //check if uppercase was a chosen criteria
        if(bigLetters == "Y") {
          //check if special characters was chosen
          if(specialChar == "Y") {
            //check if numbers were chosen
            if(numeric == "Y") {
              //all criteria has been chosen
              var outcome1 = lower + upper + special + num;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
              //-----------------------------------------------------------------------------NUMBERS NOT CHOSEN SKIP HERE-----------------------------------------------------
            } else { //numbers were not chosen
              var outcome1 = lower + upper + special;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            }
            //-------------------------------------------------------------------------SPECIAL CHAR NOT CHOSEN SKIP HERE-------------------------------------------------------
          } else { //if special characters was not chosen
            //check if numbers were chosen
            if(numeric == "Y") {
              //everything has been chosen except special characters
              var outcome1 = lower + upper + num;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            } else { //special and num was not chosen
              //only upper and lower has been chosen
              var outcome1 = lower + upper;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            }
          }
          //---------------------------------------------------------------------------UPPERCASE NOT CHOSEN SKIP HERE----------------------------------------------------------------
        } else { //if uppercase was not chosen
          //if special characters was chosen
          if(specialChar == "Y") {
            //if numbers were chosen
            if(numeric == "Y") {
              //everything except upper has been chosen
              var outcome1 = lower + special + num;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            } else { //numbers were not chosen
              //only lower and special were chosen
              var outcome1 = lower + special;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            }
          } else { //upper and special char was not chosen
            //if numbers were chosen
            if(numeric == "Y") {
              //everything except upper and special has been chosen
              var outcome1 = lower + num;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            } else { //upper, special, and num were not chosen
              //only lowercase password
              var outcome1 = lower;
              for(var i = 0; i <= passLength; i++) {
                var index = Math.floor(Math.random() * outcome1.length);
                password += outcome1.substring(index, index +1);
              }
            }
          }
        }
        //-----------------------------------------------LOWER CASE NOT CHOSEN SKIP HERE---------------------------------------------------
    } else { //if lowercase was not chosen
      //if uppercase was chosen
      if(bigLetters == "Y") {
        //if special characters was chosen
        if(specialChar == "Y") {
          //if numbers were chosen
          if(numeric == "Y") {
            //everything except lower has been chosen
            var outcome1 = upper + special + num;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          } else { //lower and num was not chosen
            var outcome1 = upper + special;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          }
        } else { //if lower and special is not chosen
          //if numbers were chosen
          if(numeric == "Y") {
            //only upper and numbers has been chosen
            var outcome1 = upper + num;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          } else { //if lower, special, and num are not chosen
            //only uppercase password
            var outcome1 = upper;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          }
        }
      } else { //if uppercase AND lowercase was not chosen
        //if special characters was chosen
        if(specialChar == "Y") {
          //if numbers were chosen
          if(numeric == "Y") {
            var outcome1 = special + num;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          } else { //if upper, lower, and num are not chosen
            //only special char password
            var outcome1 = special;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          }
        } else { //if lower, upper, and special are not chosen
          //if numbers were chosen
          if(numeric == "Y") {
            //only numbers password
            var outcome1 = num;
            for(var i = 0; i <= passLength; i++) {
              var index = Math.floor(Math.random() * outcome1.length);
              password += outcome1.substring(index, index +1);
            }
          }
        }
      }
    }
  }
  return password;
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
