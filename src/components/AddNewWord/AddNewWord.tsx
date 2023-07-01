import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { postNewWord } from "../../utils/postNewWord";

export default function AddNewWord() {
  const [origin, setOrigin] = React.useState("");
  const [translation, setTranslation] = React.useState("");

  const addNewWord = (event: any) => {
    event.preventDefault();

    postNewWord(localStorage.getItem("userId")!, { origin, translation });
    setOrigin("");
    setTranslation("");
  };
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={addNewWord}
        style={{ display: "flex", width: "100%", justifyContent: "center" }}
      >
        <Input
          placeholder="Origin"
          required
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
        />
        <Input
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          placeholder="Translation"
          required
          sx={{ mb: 1 }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
