const rollDice = (dice) => {
  min = 1;
  max = Math.floor(dice);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const roll = (dice, quantity) => {
  const result = [];
  for (let i = 1; i <= quantity; i++) {
    const roll = rollDice(dice);
    result.push({
      roll,
      dice: dice
    });
  }
  return result;
}

module.exports = {
  roll
}