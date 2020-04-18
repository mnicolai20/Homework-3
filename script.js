var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "r", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordParameters(){
  var length = parseInt(
    prompt("How many characters would you like in your password?")
  );

  if(isNaN(length) === true){
    alert("Length must be provided.");
    return;
  }

  if(length < 8){
    alert("Password must contain at lease 8 characters.");
    return;
  }

  if(length > 128){
    alert("Password cannot contain more than 129 characters.");
    return;
  }

  var specCharInquiry = confirm("Click OK if you would like your password to contain special characters.");
  var numInquiry = confirm("Click OK if you would like your password to contain numbers.");
  var lowerInquiry = confirm("Click OK if you would like your password to contain lowercase letters.");
  var upperInquiry = confirm("Click OK if you would like your password to contain uppercase letters.");

  if(
    specCharInquiry === false &&
    numInquiry === false &&
    lowerInquiry === false &&
    upperInquiry ===false
  ){
    alert("Password must contain at least one type of character.");
    return;
  }

  var passwordContents = {
    length: length,
    specCharInquiry: specCharInquiry,
    numInquiry: numInquiry,
    lowerInquiry: lowerInquiry,
    upperInquiry: upperInquiry
  };

  return passwordContents;
}

function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword(){
  var options = passwordParameters();
  
  var results = [];
  var possibleChars = [];
  var chosenChars = [];

  if(options.specCharInquiry){
    possibleChars = possibleChars.concat(symbols);
    chosenChars.push(getRandom(symbols));
  }

  if(options.numInquiry){
    possibleChars = possibleChars.concat(numbers);
    chosenChars.push(getRandom(numbers));
  }

  if(options.lowerInquiry){
    possibleChars = possibleChars.concat(lowerCase);
    chosenChars.push(getRandom(lowerCase));
  }

  if(options.upperInquiry){
    possibleChars = possibleChars.concat(upperCase);
    chosenChars.push(getRandom(upperCase));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleChars = getRandom(possibleChars);

    results.push(possibleChars);
  }

  for (let i = 0; i < chosenChars.length; i++) {
    results[i] = chosenChars[i];
  }
  return results.join("");
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
