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
  // code
  i++;
}

for (let j = 0; j < 2; j++) {
  // code
}

let k = 0;
do {
  // code
  k++;
} while (k < 2)

// ====================== Random functions ========================

let randomFloat = Math.random(); // retorna un numero decimal entre 0 y 1
let wholeNumber = Math.floor(Math.random() * 10); // retorna un numero entre 0 y 9

// retorna un numero en el rango enviado
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ====================== Convert functions =======================

let myInt = parseInt("12");
let myFloat = parseFloat("3.14");

// ====================== Ternary operator ========================

let resultEqual = 2 === 3 ? "Son iguales" : "No son iguales";


function checkSign(number) {
  return number > 0 ? "Positivo" : number === 0 ? "Cero" : "Negativo";
}

// ========================= "use strict" =========================

"use strict"; // Verifica que todas las variables esten inicializadas

// ===================== Prevent mutations  =======================

const ID = {
  "name": "Maxi",
  "surname": "Rodriguez",
  "dni": 43369962
};

Object.freeze(ID); // Previene que se modifique un objeto

// ====================== Arrow functions =========================

function sayHi(name) {
  return `Hi ${name}`;
}

let saludo = sayHi(myName);

saludo = (myName) => `Hi ${myName}`;

// ===================== Default parameter ========================
