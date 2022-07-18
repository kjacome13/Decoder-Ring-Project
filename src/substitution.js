// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //creating function to check all error cases for the alphabet parameter in the substitution function
  function _patrolUnit(alphabet) {
    //checking if the provided alphabet is undefined or not equal to 26 in length. returns an 'alert' if either of these cases are true
    if (alphabet === undefined || alphabet.length != 26) return 'alert';
    //if those pass then if goes to check for any repeating characters in provided alphabet
    for (char of alphabet){
      //if the first occurrence of the character is also the last occurrence then you know it doesn't repeat
      //if this comes back false then an alert is returned
      if(alphabet.indexOf(char) != alphabet.lastIndexOf(char)) return 'alert';
    }
  }
  //here the main function is created. taking in 3 params. setting default of encode to true
  function substitution(input, alphabet, encode = true) {
    //calling in the patrols to ensure that the provided alphabet passes all error cases. if any return an alert, it exits the function early returning false
    if (_patrolUnit(alphabet) === 'alert') return false;
    //if everything passes then we go on to create our original alphabet variable.
    //this is holding the original alphabet
    //notice there is a space at the end of the string. this is to include spaces so they can be maintained through our encoding/decoding process
    let ogAlphabet = 'abcdefghijklmnopqrstuvwxyz ';
    //creating the array that will hold our encoded/decoded message
    let finalMessage = [];
    //adding a space at the end of the provided alphabet
    alphabet += ' ';
    //making the input message lowercase
    input = input.toLowerCase();
    //when encoding
    if(encode){
      //using a for in loop
      for(char of input){
        //taking the current character in input, getting the index of it in the OG alphabet and getting the corresponding character in the provided alpabet. then pushing that into the finalMessage array
        finalMessage.push(alphabet[ogAlphabet.indexOf(char)]);
      }
    //when decoding
    } else {
      //using a for in loop
      for(char of input){
        //same thing as encoding but reversed
        finalMessage.push(ogAlphabet[alphabet.indexOf(char)]);
      }
    }
  //finally return finalMessage joined together as a string
  return finalMessage.join('')
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
