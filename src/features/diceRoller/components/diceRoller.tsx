"use client";

import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Dice, rollDice } from "../types/dice";
import DiceIcon from "./diceIcon";

interface DiceRollerProps {
  dice: Dice;
}
export default function DiceRoller({ dice }: DiceRollerProps) {
  const [rolledResult, setRolledResult] = useState<number>(0);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Card>
        <Stack direction="row" spacing={2} margin={2}>
          <Typography variant="body2" alignContent="center">
            Rolled: {rolledResult}
          </Typography>
          <IconButton onClick={() => setRolledResult(rollDice(dice))}>
            <DiceIcon />
          </IconButton>
        </Stack>
      </Card>
    </Box>
  );
}