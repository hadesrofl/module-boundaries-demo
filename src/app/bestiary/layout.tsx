import Link from "next/link";
import { IconButton, Stack } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function BestiaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack margin={1}>
      <Link href="/">
        <IconButton>
          <ArrowBack />
        </IconButton>
      </Link>
      {children}
    </Stack>
  );
}