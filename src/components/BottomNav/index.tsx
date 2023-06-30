"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: 500,
        position: "absolute",
        bottom: 0,
        left: "calc(50% - 250px)",
      }}
      value={value}
      onChange={handleChange}
    >
      <Link href="/">
        <BottomNavigationAction
          label="Main"
          value="main"
          icon={<FavoriteIcon />}
        />
      </Link>
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <Link href="/admin">
        <BottomNavigationAction
          label="Admin"
          value="admin"
          icon={<FolderIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
