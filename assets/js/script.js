// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pwdCriteria = {

  //Property for length of password
  pwdLength: 0,

  //array to hold lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array to hold uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to hold numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array to hold special characters
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "*", "+",
    "-", ".", "/", "\\", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//25 symbols
}