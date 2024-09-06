import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Stack direction="row" spacing={2}>
        <Link href="/dice-roller/6">
          <Button variant="outlined">To DiceRoller</Button>
        </Link>
        <Link href="/bestiary">
          <Button variant="outlined">To Bestiary</Button>
        </Link>
      </Stack>
    </Box>
  );
}