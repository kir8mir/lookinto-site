"use client";

import { Stack } from "@mui/system";
import BottomNav from "../BottomNav";

export default function Main({ children }: any) {
  return (
    <Stack>
      <BottomNav />
      <div>{children}</div>
    </Stack>
  );
}
