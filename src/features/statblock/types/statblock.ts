import { RollableDice } from "@features/diceRoller";
import { constantNumberToString } from "../utils/constantNumberToString";
import { Hitdie } from "./hitdie";

interface Attack {
  name: string;
  damage: RollableDice[];
}

const attackToString = ({ name, damage }: Attack) => {
  const diceAbbr = "d";
  return `${name} ${damage.map((dmg) => {
    const constantDamage = constantNumberToString(dmg.constant);
    return `(${dmg.numberOfDice}${diceAbbr}${dmg.dice} ${constantDamage})`;
  })}`;
};

export const attacksToString = (attacks: Attack[]) => {
  return attacks.map((attack) => attackToString(attack)).join(", ");
};

export interface Statblock {
  name: string;
  title?: string;
  hitdie: Hitdie;
  armorClassDescending: number;
  armorClassAscending: number;
  attacks: Attack[];
  savingThrow: number;
  movement: number;
  alignment: string;
  challengeRating: number;
  xp: number;
  specials: Record<string, string>;
}