// =========================== Comments ===========================

// Comentario en linea
/* Comentario multilinea */

// ========================== Data Types ==========================

/* undefined, null, boolean, string, symbol, number, and object */

// ========================== Variables ===========================

let variableNull;
let variableName = "value";
const CONST_NAME = "value constant";

// ========================== Operators ===========================

/* +, -, *, /, %, +=, -=, *= /=, ++, --, ==, ===, !=, !==, &&, ||, >=, <= */

// =========================== Strings ============================

let myStrig = "Comillas \"dobles\" dentro de un string";
let anotherString = 'Comillas "dobles" dentro de un string';
/* \', \", \\, \n, \r, \t, \b, \f */
let myName = "Maxi"
let concantenate = "My name is " + myName;
let concantenate2 = `My name is ${myName}`;

// ===================== Muestra por consola ======================

console.log("Hello world");

// ============================ Length ============================

let lengthVariable = "Maximiliano".length; // 11
let lengthArray = [1, 6, 23, 6].length; // 4

// ======================== Index position ========================

let mySurname = "Rodriguez";
console.log(mySurname[2]) // d
let myNames = ["Maxi", "Juan", "Carlos"];
console.log(myNames[0]); // Maxi
let lastArrayPosition = myNames[myNames.length - 1];
console.log(lastArrayPosition);

// ============================ Array =============================

let arrayName = ["value1", "value2"];
let multidimensionalArray = [[1, 2], [3, 4]];
arrayName.push("value3");
let lastElement = arrayName.pop();
let firstElement = arrayName.shift()
arrayName.unshift("value1")

// ========================== Functions ===========================


function functionName(firstParameter, secondParameter) {
  answer = firstParameter + " " + secondParameter;
}


// ========================= Conditionals =========================

let condition;
let secondCondition;
let conditionAnswer;

if (condition) {
  conditionAnswer = "La condición se cumplió";
} else if (secondCondition) {
  conditionAnswer = "La segunda condición se cumplió";
} else {
  conditionAnswer = "No se cumplió ninguna condición";
}

// ============================ Switch ============================

let switchAnswer;
let switchValue;

switch(switchValue) {
  case 1:
    switchAnswer = "alpha";
    break;
  case 2:
  case 3:
    switchAnswer = "beta";
    break;
  default:
    switchAnswer = "Out of range";
    break;
}

// =========================== Objects ============================

let objectName = {
  "firstProperty": "first value",
  "second property": "second value"
};

let firstPropertyObject = objectName.firstProperty;
let secondPropertyObject = objectName["second property"];

objectName.thirdProperty = "third value";
delete objectName.thirdProperty;

objectName.hasOwnProperty("propertyToCheck"); // verifica si existe la propiedad

// ============================ Loops =============================

let i = 0;
while (i < 2) {
  console.log(`While - loop: ${i}`);
  i++;
}

for (let i = 0; i < 2; i++) {
  console.log(`For - loop: ${i}`);
}
