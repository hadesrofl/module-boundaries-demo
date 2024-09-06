import { RollableDice } from "@features/diceRoller";
import { constantNumberToString } from "../utils/constantNumberToString";

export interface Hitdie extends RollableDice {}

export const hitdieToString = (hitdie: Hitdie) => {
  const constant = constantNumberToString(hitdie.constant);
  const diceAbbr = "d";
  return `${hitdie.numberOfDice}${diceAbbr}${hitdie.dice} ${constant}`;
};