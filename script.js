// Assignment Code
var inquiries = {
  prompt("How many characters do you want in your password?")
    if (userInput > 8 || userInput < 128) {
      confirm("Do you want uppcase letters in your password?")
      if (true) {
          confirm("Do you want lowercase letters in your password?")
          if (true) {
              confirm("Do you want numbers in your password?")
              if (true) {
                  confirm("Do you want symboles in your password?")
              }
          }
      }
  }
}

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";
  var types = lower + upper + number + symbol;
  var typesArr = [{lower}, {upper}, {number}, {symbol}];

  for (let i = 0; i < length; i+= userInput) {
      typesArr.forEach(type => {
          var randomFunc = Object.keys(type)[0];

          generatePassword += randomFunc
      });
      
  }

}




// generator functions

function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*()_+=-{[}]<>"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);