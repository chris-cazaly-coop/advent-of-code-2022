const strategyGuide = `A Y
B X
C Z`;

const pointsGuide = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
  LOSE: 0,
  DRAW: 3,
  WIN: 6,
};

const calculateScore = (player1, player2) => {
  let score = 0;
  score += pointsGuide[player2];

  if (
    (player1 == "C" && player2 == "Z") ||
    (player1 == "A" && player2 == "X") ||
    (player1 == "B" && player2 == "Y")
  )
    score += 3;
  if (
    (player1 == "A" && player2 == "Y") ||
    (player1 == "B" && player2 == "Z") ||
    (player1 == "C" && player2 == "X")
  ) {
    return (score += 6);
  }
  return score;
};

const pointsGuide2 = {
  A: 1,
  B: 2,
  C: 3,
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
  LOSE: 0,
  DRAW: 3,
  WIN: 6,
};

const calculateScore2 = (player1, result) => {
    let
    
    if (result == 'X') {

    }
}; 

// format input -------------------------

let rounds = strategyGuide.split("\n");

rounds = rounds.map((result) => {
  let res = result.split(" ");
  return [res[0], res[1]];
});

// ---------------------------------------

let totalScore = 0;

console.log(totalScore);
