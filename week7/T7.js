const numbers = [5, 12, 8, 130, 44];

const numberOrder = numbers.sort((a, b) => b - a);
console.log(numberOrder);
////
const lessThan30 = numbers.filter((less) => less < 30);
console.log(lessThan30);
//////
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(`sum: ${sum}`);
//////
const stringNumber = numbers.map(String);
console.log(stringNumber);
///////////
const result = numbers.map((num, index) => num - index);
console.log(result);

////////////////////////////
// 2

// function getWeekday(date) {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   return days[date.getDay()];
// }

// console.log(getWeekday(new Date())); // "Sunday”

// console.log(getWeekday(new Date("2012-10-10"))); // 'wednesday'

//////////
// 3

// function getRandomInt(min, max) {
//   if (!min && !max) {
//     return "Enter Min And Max";
//   }
//   if (!max) {
//     max = min;
//     min = 0;
//   }
//   const result = Math.floor(Math.random() * max - min + 1) + min;
//   return result;
// }
// console.log(getRandomInt(1, 10)); // Random integer between 1 and 10

//////////////
// 4 Debug

// function kebabToPascalCase(sentence) {
//   const words = sentence.split(" ");
//   const transformedWords = words.map((word) => {
//     if (word.includes("-")) {
//       const parts = word.split("-");
//       const pascalCaseWord = parts
//         .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//         .join("");
//       return pascalCaseWord;
//     } else {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }
//   });
//   return transformedWords.join(" ");
// }

// const sentence = "convert kebab-case to pascal-case";
// const result = kebabToPascalCase(sentence);
// console.log(result); // Expected to be: "Convert KebabCase To PascalCase"
