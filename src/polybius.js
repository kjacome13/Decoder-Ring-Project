// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //Here i am making a function that creates an array with objects in it. each object has a letter and its number value assigned to it.
  //all according to the polybius cipher grid.
  function _cipher(){
    //here i am creating a string of the alphabet for later use to generate the cipher keys
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    //creating the variable/array to hold all the key/values of the cipher
    const cipherKeys = [];
    //creating a column and row to count through
    let columns = 1;
    let rows = 1;
    //using a for in loop
    for(letter of letters){
      //create the format for each object that will get pushed into the cipherKeys array.
      let cipherKey = {
        //making the current letter the key and the combined column/row the value
        letter : letter,
        number : `${columns}${rows}`,
      };
      //here i am using an if statement to ensure that both 'i' and 'j' will be assigned 42 as their value.
      //i do this by having the loop skip over adding to the columns and rows values until after both 'i' and 'j' have been assigned the proper value (42).
      if(letter == 'i'){
        //pushing the 'i' object into the array
        cipherKeys.push(cipherKey);
      } else {
        //pushing current object holding all needed information into the array
        cipherKeys.push(cipherKey);
        //making sure the format for the grid is kept intact
        //by using this if else statement I am ensuring that the columns variable never goes over 5.
        if(columns > 4){
            //if it does then it gets reset back to 1
            columns = 1;
            //and adds 1 to the row
            rows++;
          //if it hasnt gone over 5 yet then carry on by only adding 1 to the column
        } else {
            columns++;
        }
      }
    }
    //after all is done we return the finished array.
    //the cipher keys have successfully been generated!!
    return cipherKeys;
  }

  //here i am making the encoding/decoding function...it should take in an input/message and a boolean which will determine if we are encoding or decoding..should return a string with either an encoded message or decoded message
  function polybius(input, encode = true) {
    //creating an array to hold the characters of our final message.. will be returning this at the end
    let finalMessage = [];
    //using the cipher function made above i am creating and storing the polybius keys in this variable 'cypherKeys'
    //we will use this later to access the number and letter pairs inside
    let cypherKeys = _cipher();
    //using an if else statement i am separating what will be done when encoding vs decoding
    //first up is encoding
    if(encode){
      //making input lowercase
      input = input.toLowerCase();
      //using a for in loop
      for(char of input){
      //i am finding each object holding the key/value pair for each character in the input message.
      //storing the object in this variable 'temp'
      let temp = cypherKeys.find(obj => obj.letter === char);
      //if temp has a value assigned to it
      if(temp){
          //then we push the number value in the temp object into the finalMessage array
          finalMessage.push(temp.number);
        //if temp does not have a valid value meaning that the current character is not part of the alphabet  
      } else {
          //then we push that character as is into the finalMessage array.
          finalMessage.push(char);
      }}
    //here is the decoding area
    } else {
      //making sure that if the input is invalid AKA has an odd amount of numbers, then it will return false.
      //getting rid of any spaces in the input message to be able to count the numbers accurately.
      if(input.replace(" ","").length%2>0) return false;
      //now we move on to the for loop i made here
      //using this for loop to iterate through the input message that we are trying to decode
      //i am having the loop variable 'i' increment by 2 every iteration so that we can read the numbers as pairs.
      for(let i = 0; i < input.length; i+=2){
        //here using an if statement i am checking if the following character after the current number pair is a space.
        if(input[i+2] == " "){
            //if it is then we create a temporary variable to hold the current number pair
            let tempVar = input.slice(i, i+2);
            //find that number pair's corresponding object holding its number and letter information and grab the letter
            let translated = cypherKeys.find(obj => obj.number === tempVar).letter
            //here in the case that tempVar is 42 we then set translated variable to 'ij'
            if(tempVar == 42) translated = 'ij';
            //pusing the translated letter and the space after it into the finalMessage array
            finalMessage.push(translated, input[i+2]);
            //then incrementing 'i' by 1 so that it can skip over the space and move on to the next number pair.
            i++;
          //if there is no space following the current number pair then we do the following
        } else {
            //create a temporary varible to hold the current number pair
            let tempVar = input.slice(i, i+2);
            //assigning the variable to hold only the corresponding letter of the found current number pair
            let translated = cypherKeys.find(obj => obj.number === tempVar).letter
            //again if the number pair is 42 set the variable to 'ij'
            if(tempVar == 42) translated = 'ij';
            //finally push the letter into the finalMessage array 
            finalMessage.push(translated);
        }
      }
    }
    //FINALLY return finalMessage array joined together as a string! yay!
    return finalMessage.join(''); 
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
