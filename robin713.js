// Receive following string ".uoy fo lla naht ynapmoc retteb a ekam nac I .ynapmoc siht ta OEC eht eb ot evresed I"
// Return the string reversed
// Do not use reverse method

function reverseMessage(message){
  let messageArr = message.split('');
  let result = [];
  for(let i = messageArr.length - 1; i >= 0; i--){
    result.push(messageArr[i]);
  }
  return result.join('');
}
