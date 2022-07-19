import { Box, Typography, useMediaQuery } from "@mui/material";
import { Colord, colord } from "colord";
import { HexColorPicker, RgbaColorPicker } from "react-colorful";
import { ColorResult } from "../App";
import { useSmallScreen } from "../utils/functions";

export default function MainColorPicker({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: Colord;
  setSelectedColor: (color: Colord) => void;
}) {
  const isSmallScreen = useSmallScreen();
  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
      }}
    >
      <RgbaColorPicker
        style={{
          width: isSmallScreen ? "95vw" : "45vw",
        }}
        color={selectedColor.toRgb()}
        onChange={(newColor) => setSelectedColor(colord(newColor))}
      />
    </Box>
  );
}
