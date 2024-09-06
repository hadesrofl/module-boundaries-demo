import { Dice, rollDice } from "./dice";

export interface RollableDice {
  numberOfDice: number;
  dice: Dice;
  constant?: number;
}

export const rollDie = (dice: RollableDice[]) => {
  const rolledValues = [];
  return dice
    .map((die) => {
      for (let i = 0; i < die.numberOfDice; i += 1) {
        rolledValues.push(rollDice(die.dice));
      }
      return (
        rolledValues.reduce((prev, curr) => prev + curr) + (die.constant ?? 0)
      );
    })
    .reduce((prev, curr) => prev + curr);
};
