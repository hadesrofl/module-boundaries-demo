"use client";
import {
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { attacksToString, Statblock } from "../types/statblock";
import { useState } from "react";
import { hitdieToString } from "../types/hitdie";
import Grid from "@mui/material/Grid";
import { Dice, DiceIcon, rollDie } from "@features/diceRoller";

export interface StatblockCardProps {
  statblock: Statblock;
}

function StatblockEntry({ label, value }: { label: string; value: string }) {
  return (
    <Typography variant="body2">
      <strong>{label}</strong> {value}
    </Typography>
  );
}

export default function StatblockCard({ statblock }: StatblockCardProps) {
  const theme = useTheme();
  const [rolledHitPoints, setRolledHitPoints] = useState<number>(0);
  const [rolledDamage, setRolledDamage] = useState<
    Record<string, { hit: number; damage: number }>
  >({});
  const {
    name,
    title,
    hitdie,
    armorClassAscending,
    armorClassDescending,
    attacks,
    savingThrow,
    movement,
    alignment,
    challengeRating,
    xp,
    specials,
  } = statblock;
  return (
    <>
      <Card variant="outlined" component="h1">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} alignContent="center">
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              {title && (
                <Typography
                  variant="subtitle2"
                  component="div"
                  color={theme.palette.grey[600]}
                >
                  {title}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center">
                <StatblockEntry
                  label="Hitdice:"
                  value={`${hitdieToString(
                    hitdie,
                  )} (Rolled: ${rolledHitPoints})`}
                />
                <IconButton
                  sx={{}}
                  onClick={() => setRolledHitPoints(rollDie([hitdie]))}
                >
                  <DiceIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={6} alignContent="center">
              <StatblockEntry
                label="Armor Class:"
                value={`${armorClassAscending} [${armorClassDescending}]`}
              />
            </Grid>
            <Grid item xs={12} alignContent="center">
              <StatblockEntry
                label="Attacks:"
                value={attacksToString(attacks)}
              />
            </Grid>
            <Grid item xs={6} alignContent="center">
              <StatblockEntry
                label="Saving Throw:"
                value={savingThrow.toFixed()}
              />
            </Grid>
            <Grid item xs={6} alignContent="center">
              <StatblockEntry label="Movement:" value={movement.toFixed()} />
            </Grid>
            <Grid item xs={6} alignContent="center">
              <StatblockEntry label="Alignment:" value={alignment} />
            </Grid>
            <Grid item xs={6} alignContent="center">
              <StatblockEntry
                label="CR/XP:"
                value={`${challengeRating}/${xp}`}
              />
            </Grid>
            {Object.keys(specials).length > 0 && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" component="div">
                    Specials
                  </Typography>
                  <Divider sx={{ marginTop: 1 }} />
                </Grid>
              </>
            )}
            {Object.entries(specials).map(([special, description]) => {
              return (
                <Grid item xs={12} key={special}>
                  <StatblockEntry label={`${special}:`} value={description} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Typography variant="h6" component="div">
                Attacks
              </Typography>
              <Divider sx={{ marginTop: 1 }} />
            </Grid>
            {attacks.map((attack) => {
              return (
                <Grid item xs={4} spacing={4} key={attack.name}>
                  <Button
                    variant="outlined"
                    endIcon={<DiceIcon />}
                    onClick={() =>
                      setRolledDamage({
                        ...rolledDamage,
                        [attack.name]: {
                          hit: rollDie([
                            {
                              numberOfDice: 1,
                              dice: Dice.d20,
                              constant: hitdie.numberOfDice,
                            },
                          ]),
                          damage: rollDie(attack.damage),
                        },
                      })
                    }
                  >
                    {attack.name} <br />
                    (Hit: {rolledDamage[attack.name]?.hit ?? 0} Damage:{" "}
                    {rolledDamage[attack.name]?.damage ?? 0})
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}