import { Stack } from "@mui/material";
import { Colord } from "colord";
import { useReallySmallScreen } from "../utils/functions";
import { HexSelector } from "./HexSelector";
import { RGBSelector } from "./RGBSelector";

export function MainColorFields({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: Colord;
  setSelectedColor: (color: Colord) => void;
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
      />
      <RGBSelector
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
    </Stack>
  );
}
