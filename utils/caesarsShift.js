//This method is responsible for handling  the encryption process called
// in CaesarsController. Assuming the messages provided are
//  either all uppercase or lower case letters result will be encrypted based on the
// look up of  each characters corresponing  unicode  and support shift  values with both negative
// and positive values 

const fs = require('fs');
const save2Disk = require('../utils/save2Disk');

caesarsShiftUtil = (msg, shift) => {
  if (shift < 0) {
    shift = 26 + (shift % 26);
  }

  let Encodedmessage = msg
    .split('') //splits it into an array
    .map((msg) => {
      //does the following to each element in the array
      normalStr = String.fromCharCode(msg.charCodeAt());
      prePoint = msg.charCodeAt(); //gets the charcode of element
      //if/else checks to see if upper or lower case
      if (prePoint >= 65 && prePoint <= 90) {
        //upper case
        return String.fromCharCode(((prePoint - 65 + shift) % 26) + 65);
      } else if (prePoint >= 97 && prePoint <= 122) {
        //lower case
        return String.fromCharCode(((prePoint - 97 + shift) % 26) + 97);
      } else {
        return normalStr;
      }
    })
    .join('');

  save2Disk(Encodedmessage);

  return Encodedmessage;
};

module.exports = caesarsShiftUtil;
