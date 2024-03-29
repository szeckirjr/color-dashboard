import { Tag } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Colord, colord } from "colord";
import { useEffect, useState } from "react";
import { CopyButton } from "./CopyButton";

export function HexSelector({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: Colord;
  setSelectedColor: (col: Colord) => void;
  setOpen: (val: boolean) => void;
}) {
  useEffect(() => {
    setEnteredHex(selectedColor.toHex().replace("#", ""));
  }, [selectedColor]);
  const [enteredHex, setEnteredHex] = useState(
    selectedColor.toHex().replace("#", "")
  );
  const handleSelect = () => {
    if (colord("#" + enteredHex).isValid()) {
      setSelectedColor(colord("#" + enteredHex));
    }
  };
  return (
    <Stack direction="column" gap={2} sx={{ width: "100%" }}>
      <TextField
        value={enteredHex}
        onChange={(e) => setEnteredHex(e.target.value)}
        size="small"
        label="HEX"
        InputProps={{
          sx: {
            fontSize: "1.25em",
          },
          startAdornment: (
            <InputAdornment position="start">
              <Tag />
            </InputAdornment>
          ),
        }}
        error={!colord("#" + enteredHex).isValid()}
        helperText={
          !colord("#" + enteredHex).isValid() ? "Invalid Hex code" : ""
        }
        variant="standard"
      />
      <ButtonGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#" + enteredHex,
            color: colord("#" + enteredHex).isLight() ? "black" : "white",
            "&:hover": {
              backgroundColor: colord("#" + enteredHex)
                .darken()
                .toHex(),
            },
            width: "100%",
          }}
          onClick={handleSelect}
        >
          Select HEX
        </Button>
        <CopyButton
          color={selectedColor}
          backgroundColor={`#${enteredHex}`}
          setOpen={setOpen}
          colorMode="hex"
        />
      </ButtonGroup>
    </Stack>
  );
}
