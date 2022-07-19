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
import { useReallySmallScreen, useSmallScreen } from "../utils/functions";
import { CopyButton } from "./CopyButton";

export function RGBSelector({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: Colord;
  setSelectedColor: (col: Colord) => void;
}) {
  const [enteredRed, setEnteredRed] = useState(selectedColor.toRgb().r);
  const [enteredGreen, setEnteredGreen] = useState(selectedColor.toRgb().g);
  const [enteredBlue, setEnteredBlue] = useState(selectedColor.toRgb().b);
  const [enteredAlpha, setEnteredAlpha] = useState(selectedColor.toRgb().a);
  const isReallySmallScreen = useReallySmallScreen();
  const isSmallScreen = useSmallScreen();

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
  return (
    <Stack sx={{ width: "100%" }} direction="column" gap={2}>
      <Stack
        direction={isReallySmallScreen ? "column" : "row"}
        gap={isSmallScreen ? 0 : 1}
        sx={{ width: "100%" }}
      >
        <TextField
          value={enteredRed}
          onChange={(e) => setEnteredRed(e.target.value as unknown as number)}
          sx={{
            fontSize: "1.5em",
            flexGrow: 1,
          }}
          type="number"
          inputProps={{
            max: 255,
            min: 0,
          }}
          label="R"
          error={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
          }
          helperText={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
              ? "Invalid Red Value"
              : ""
          }
        />
        <TextField
          type="number"
          inputProps={{
            max: 255,
            min: 0,
          }}
          value={enteredGreen}
          onChange={(e) => setEnteredGreen(e.target.value as unknown as number)}
          sx={{
            fontSize: "1.5em",
            flexGrow: 1,
          }}
          label="G"
          error={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
          }
          helperText={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
              ? "Invalid Green Value"
              : ""
          }
        />
        <TextField
          type="number"
          inputProps={{
            max: 255,
            min: 0,
          }}
          value={enteredBlue}
          onChange={(e) => setEnteredBlue(e.target.value as unknown as number)}
          sx={{
            fontSize: "1.5em",
            flexGrowing: 1,
          }}
          label="B"
          error={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
          }
          helperText={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
              ? "Invalid Blue Value"
              : ""
          }
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
          error={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
          }
          helperText={
            !colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isValid()
              ? "Invalid Alpha Value"
              : ""
          }
        />
      </Stack>
      <ButtonGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).toHex(),
            color: colord(
              `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
            ).isLight()
              ? "black"
              : "white",
            "&:hover": {
              backgroundColor: colord(
                `rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`
              )
                .darken()
                .toHex(),
            },
            width: "100%",
          }}
          onClick={handleSelect}
        >
          Select RGB
        </Button>
        <CopyButton
          text={selectedColor.toRgbString()}
          backgroundColor={`rgba(${enteredRed}, ${enteredGreen}, ${enteredBlue}, ${enteredAlpha})`}
        />
      </ButtonGroup>
    </Stack>
  );
}
