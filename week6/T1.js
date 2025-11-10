// Exercise one
////////////////////////////////////////
function calculate(a, b, operator) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "invalid arguments";
  }
  if (!["+", "-", "*", "/"].includes(operator)) {
    return "invalid arguments";
  }
  if (b === 0 && operator === "/") {
    return "invalid arguments";
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

console.log(calculate(2, 3, "+")); // 5
console.log(calculate(2, 3, "-")); // -1
console.log(calculate(2, 0, "/")); // 'invalid arguments'
console.log(calculate(2, 4, "*")); // 8

// Exercise two
//////////////////////////////////////////

// function isPrime(number) {
//   if (typeof number !== "number") {
//     return "invalid argument";
//   }
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(2)); // true
// console.log(isPrime(6)); // false
// console.log(isPrime("two")); // 'invalid argument'
