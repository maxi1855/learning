// =========================== Golf score ===========================

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

// ===========================  ===========================