import { Stack } from "@mui/material";
import { Colord } from "colord";
import { useReallySmallScreen } from "../utils/functions";
import { HexSelector } from "./HexSelector";
import { RGBSelector } from "./RGBSelector";

export function MainColorFields({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: Colord;
  setSelectedColor: (color: Colord) => void;
  setOpen: (val: boolean) => void;
}) {
  const isReallySmallScreen = useReallySmallScreen();
  return (
    <Stack
      direction={isReallySmallScreen ? "column" : "row"}
      display="flex"
      alignItems="baseline"
      gap={3}
    >
      <HexSelector
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        setOpen={setOpen}
      />
      <RGBSelector
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        setOpen={setOpen}
      />
    </Stack>
  );
}
