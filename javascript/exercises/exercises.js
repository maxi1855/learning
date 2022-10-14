// =========================== Golf score ===========================
/*
Requerimientos:
- Ingresar par y golpes
- Devolver puntaje
*/

console.log("Golf score");
console.log("==================================================");

let resultsOfGolf = ["Hole in one", "Eagle", "Birdie", "Par", "Bogey", "Double bogey", "Go home"]

function golfScore(par, strokes) {
  let result;
  if (strokes == 1) {
    result = resultsOfGolf[0];
  } else if (strokes <= par - 2) {
    result = resultsOfGolf[1];
  } else if (strokes == par - 1) {
    result = resultsOfGolf[2];
  } else if (strokes == par) {
    result = resultsOfGolf[3];
  } else if (strokes == par + 1) {
    result = resultsOfGolf[4];
  } else if (strokes == par + 2) {
    result = resultsOfGolf[5];
  } else if (strokes >= par + 3) {
    result = resultsOfGolf[6];
  }
  return result;
}

console.log(golfScore(6, 6));

// ========================= Counting cards =========================
/*
Requerimientos:
- Ingresar carta
- En caso de ser valor bajo sumar 1
- En caso de ser valor alto restar 1
- Devolver sugestion
*/

console.log("\nCounting cards");
console.log("==================================================");

let count = 0;

function countingCards(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }
  let holdBet = "Hold";
  if (count > 0) {
    holdBet = "Bet";
  }
  return count + " " + holdBet;
}

countingCards(2);
countingCards("K");
countingCards(10);
countingCards("K");
countingCards("A");

console.log(countingCards(4));

// ======================= Record collection ========================
/*
Requerimientos:
- Ingresar id, propiedad y valor
- Actualizar la coleccion con el valor enviado
- En caso de que el valor sea "" eliminar la propiedad
- En caso de que sea una canción agregarla al final de la lista
*/

console.log("\nRecord collection");
console.log("==================================================");

let collection = {
  2548: {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    "artist": "Robert Palmer",
    "tracks": []
  },
  5439: {
    "album": "ABBA Gold"
  }
};

function updateRecords(id, prop, val) {
  if (val === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || []; // Si la primera opcion es undefined, selecciona la otra opcion
    collection[id][prop].push(val);
  } else {
    collection[id][prop] = val;
  }
}

console.log("Antes:");
console.log(JSON.stringify(collection));

updateRecords(2468, "artist", "Quincy");

console.log("\nDespués:");
console.log(JSON.stringify(collection));

// ========================= Profile lookup =========================
/*
Requerimientos:
- Ingresar nombre y propiedad
- Devolver el valor de la propiedad ingresada
- En caso de no tener ese contacto, devolver "Contacto no encontrado"
- En caso de no encontrar esa propiedad, devolver "Propiedad invalida"
*/

console.log("\nProfile lookup");
console.log("==================================================");

let contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwards", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "Unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      return contacts[i][property] || "Propiedad no encontrada";
    }
  }
  return "Contacto no encontrado.";
}

console.log(lookUpProfile("Akira", "likes"));
