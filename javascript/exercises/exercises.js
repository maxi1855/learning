// =========================== Golf score ===========================
/*
- Ingresar el par y los golpes realizados
- Devolver el puntaje obtenido
*/

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
- Ingresar id, propiedad y valor
- Actualizar la coleccion con el valor enviado
- En caso de que el valor sea "" eliminar la propiedad
- En caso de que sea una canción agregarla al final de la lista
*/

let collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {

  if (!collection[id].hasOwnProperty(prop)) {
    if (value == "") {
      console.log("Error, no podemos eliminar una propiedad inexistente.");
    } else if (prop == "tracks") {
      collection[id][prop] = [value];
      console.log("La lista de canciones se ha creado exitosamente.");
    } else {
      collection[id][prop] = value;
      console.log(`La propiedad "${prop}" se ha creado con el valor "${value}".`);
    }
  } else {
    if (value == "") {
      delete collection[id][prop];
      console.log("La propiedad se ha borrado exitosamente.");
    } else if (prop == "tracks") {
      collection[id][prop].push(value);
      console.log("La canción se ha agregado exitosamente.");
    } else {
      collection[id][prop] = value;
      console.log(`La propiedad "${prop}" se ha actualizado con el valor "${value}".`);
    }
  }
  console.log("=====================================================================");
  console.log("Colección actualizada:\n")
  console.log(collection);
}

updateRecords("2468", "artist", "Quincy");
