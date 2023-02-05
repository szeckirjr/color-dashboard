import { Button, ButtonGroup, Stack, TextField } from "@mui/material";
import { Colord, colord } from "colord";
import { useEffect, useState } from "react";
import { CopyButton } from "./CopyButton";

export function RGBSelector({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: Colord;
  setSelectedColor: (col: Colord) => void;
  setOpen: (val: boolean) => void;
}) {
  const [enteredRed, setEnteredRed] = useState(selectedColor.toRgb().r);
  const [enteredGreen, setEnteredGreen] = useState(selectedColor.toRgb().g);
  const [enteredBlue, setEnteredBlue] = useState(selectedColor.toRgb().b);
  const [enteredAlpha, setEnteredAlpha] = useState(selectedColor.toRgb().a);

  useEffect(() => {
    setEnteredRed(selectedColor.toRgb().r);
    setEnteredGreen(selectedColor.toRgb().g);
    setEnteredBlue(selectedColor.toRgb().b);
    setEnteredAlpha(selectedColor.toRgb().a);
  }, [selectedColor]);

  const handleSelect = () => {
    const clr = `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`;
    if (colord(clr).isValid()) {
      setSelectedColor(colord(clr));
    }
  };

  const enteredRgba = `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`;
  return (
    <Stack sx={{ width: "100%" }} direction="column" gap={2}>
      <Stack direction="row" gap={1}>
        <TextField
          value={enteredRed}
          onChange={(e) => setEnteredRed(e.target.value as unknown as number)}
          type="number"
          inputProps={{
            max: 255,
            min: 0,
          }}
          sx={{
            fontSize: "1.5em",
            flexGrow: 1,
          }}
          label="R"
          error={!colord(enteredRgba).isValid()}
          variant="standard"
          size="small"
        />
        <TextField
          type="number"
          inputProps={{
            max: 255,
            min: 0,
          }}
          sx={{
            fontSize: "1.5em",
            flexGrow: 1,
          }}
          value={enteredGreen}
          onChange={(e) => setEnteredGreen(e.target.value as unknown as number)}
          label="G"
          error={!colord(enteredRgba).isValid()}
          variant="standard"
          size="small"
        />
        <TextField
          type="number"
          inputProps={{
            max: 255,
            min: 0,
          }}
          sx={{
            fontSize: "1.5em",
            flexGrow: 1,
          }}
          value={enteredBlue}
          onChange={(e) => setEnteredBlue(e.target.value as unknown as number)}
          label="B"
          error={!colord(enteredRgba).isValid()}
          variant="standard"
          size="small"
        />
        <TextField
          type="number"
          inputProps={{
            max: 255,
            min: 0,
            step: 0.1,
          }}
          value={enteredAlpha}
          onChange={(e) => setEnteredAlpha(e.target.value as unknown as number)}
          sx={{
            fontSize: "1.5em",
            flexGrow: 1,
          }}
          label="A"
          error={!colord(enteredRgba).isValid()}
          variant="standard"
          size="small"
        />
      </Stack>
      <ButtonGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colord(enteredRgba).toHex(),
            color: colord(enteredRgba).isLight() ? "black" : "white",
            "&:hover": {
              backgroundColor: colord(enteredRgba).darken().toHex(),
            },
            width: "100%",
          }}
          onClick={handleSelect}
        >
          Select RGB
        </Button>
        <CopyButton
          color={selectedColor}
          backgroundColor={enteredRgba}
          setOpen={setOpen}
          colorMode="rgba"
        />
      </ButtonGroup>
    </Stack>
  );
}
