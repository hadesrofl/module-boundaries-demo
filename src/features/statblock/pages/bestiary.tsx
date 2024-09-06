import Grid from "@mui/material/Grid";
import { Statblock } from "../types/statblock";
import StatblockCard from "../components/statblockCard";
import { Dice } from "@features/diceRoller";
// import { iAmAConst } from "@app/constantToShowBoundary";

export default function Bestiary() {
  // console.log(iAmAConst);
  const cookIsleen: Statblock = {
    name: "Isleen",
    title: "Chef of the Castle",
    hitdie: { numberOfDice: 1, dice: Dice.d8 },
    armorClassAscending: 5,
    armorClassDescending: 14,
    attacks: [
      { name: "2 Knife", damage: [{ dice: Dice.d12, numberOfDice: 1 }] },
    ],
    savingThrow: 17,
    movement: 12,
    alignment: "Neutral",
    challengeRating: 3,
    xp: 60,
    specials: {
      ["Staff"]:
        "Isleen is always in company of one cook and d4 helpers to have some scapegoats.",
    },
  };

  return (
    <Grid container>
      {[cookIsleen].map((statblock) => {
        return (
          <Grid item xs={6} key={statblock.name}>
            <StatblockCard statblock={statblock} />
          </Grid>
        );
      })}
    </Grid>
  );
}
