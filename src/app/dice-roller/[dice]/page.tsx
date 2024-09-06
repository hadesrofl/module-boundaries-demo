import { Dice, DiceRoller } from "@features/diceRoller";

interface DiceRollerPageProps {
  params: {
    dice: Dice;
  };
}

export default function BestiaryPage({ params }: DiceRollerPageProps) {
  return <DiceRoller dice={params.dice} />;
}
