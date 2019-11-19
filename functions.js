function youRock (name) {
  
    return "You rock " + name
}

console.log (youRock("AZIZA"))

// *********************************

function square (num) {
    return num * num
}
console.log (square(2))

// *********************************

function cube (num) {
    return Math.pow(num,3)
}

console.log (cube(2))

// *********************************

function toTheFourth (num) {
    return Math.pow(num,4)
}

console.log (toTheFourth(2))

// *********************************

// ADD function 
function add (num1, num2) {
    return num1 + num2
}

console.log (add(1, 2))

// SUBTRACT function
function subtract (num1, num2) {
    return num1 - num2
}

console.log (subtract(1, 2))

// DIVIDE function
function divide (num1, num2) {
    return num1 / num2
}

console.log (divide(1, 2))

// MULTYIPLY function
function multiply (num1, num2) {
    return num1 * num2
}

console.log (multiply(1, 2))

// *********************************

function fizzBuzz(num){
    let result = ""
      if (num % 3 == 0) {
        result += "Fizz"}
      if (num % 5 == 0) {
        result += "Buzz"}
      return result
  }
  console.log (fizzBuzz(15))