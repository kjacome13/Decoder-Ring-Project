// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  //setting the default for shift so it will always have a value
  function caesar(input, shift = 0, encode = true) {
    //Ok so we start by checking for any errors that may be possible and get those out of the way
    if(shift === 0 || shift < -25 || shift > 25) return false;
    //next im going to check if the encode is true or false and change the shift value accordingly
    !encode ? shift*=-1:null;
    //now im setting up the array that were going to use to encode/decode. 
    //instead of doing weird math to figure out how to make the shifting wrap to the beginning of the alphabet and whatever
    //we can maybe try to do it piano style and have it repeat the alphabet on both sides like how there are octaves on the piano
    //shoutout mom for making me learn to play piano hahahaha
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const pianoKeys = [...letters,...letters,...letters];
    
    //now im creating a variable to hold the final message that will be returned
    const finalMessage = [];
    //making the input message lowercase
    input = input.toLowerCase();
    //using for in loop cuz easier to write and still works on strings haha
    for(char of input){
      //creating variable to hold the index of each character in the input message
      const charNum = letters.indexOf(char);
      //here we are checking if each "char" in the input message is a letter in the alphabet
      //if it isnt a valid letter then we just push it into the array since we are not changing any symbols or spaces
      //if it is a letter we place it in its position in the center 'octave' of the piano and shift it to the left or right according to the shift value and push the encoded/decoded character to the final message array
      !letters.includes(char) ? finalMessage.push(char) : finalMessage.push(pianoKeys[charNum + 26 + shift]);
    }
    //returning the final message but joining it all together so it is converted to a string
    return finalMessage.join('');
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
