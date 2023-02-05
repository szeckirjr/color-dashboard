import { Stack, Typography } from "@mui/material";
import { Colord, colord } from "colord";
import { RgbaColorPicker } from "react-colorful";
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
    <Stack mb={1}>
      <Typography variant={isSmallScreen ? "h6" : "h5"} fontWeight="500">
        Enter or pick a color
      </Typography>
      <RgbaColorPicker
        style={{
          width: "100%",
        }}
        color={selectedColor.toRgb()}
        onChange={(newColor) => setSelectedColor(colord(newColor))}
      />
    </Stack>
  );
}
