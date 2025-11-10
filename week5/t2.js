const myArray = [
  "+989393676765",
  "+989393456123",
  "+989393455465",
  "+989393456722",
  "+989393456765",
];
const phone = Math.floor(myArray.length/2);
const phoneNumber = myArray[phone];
const fullphone = phoneNumber.replace("+98","0");
console.log(fullphone);
