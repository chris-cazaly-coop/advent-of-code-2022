const letters = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const formattedInput = input.split(/\n/).map((bag) => {
  const bag1 = bag.slice(0, bag.length / 2);
  const bag2 = bag.slice(bag.length / 2, bag.length);
  return [bag1, bag2];
});

let totalScore = 0;

formattedInput.forEach((bag) => {
  let bag1 = bag[0].split("");
  let commonLetter;
  bag1.forEach((letter) => {
    if (bag[1].includes(letter)) {
      commonLetter = letter;
    }
  });
  totalScore += letters.indexOf(commonLetter);
});

console.log(formattedInput);
console.log(totalScore);
