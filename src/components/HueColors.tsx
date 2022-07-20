import { Box, Stack, Typography } from "@mui/material";
import { Colord, colord } from "colord";
import { useReallySmallScreen, useSmallScreen } from "../utils/functions";
import ColorBadge from "./ColorBadge";

export default function HueColors({
  color,
  setColor,
  selectedColor,
}: {
  color: Colord;
  setColor: (color: Colord) => void;
  selectedColor: Colord;
}) {
  const isReallySmallScreen = useReallySmallScreen();
  const isSmallScreen = useSmallScreen();
  const colors = [
    0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240,
    255, 270, 285, 300, 315, 330, 345,
  ].map((val) => {
    return colord({
      h: val,
      s: color.toHsl().s <= 1 ? color.toHsl().s * 100 : color.toHsl().s,
      l: color.toHsl().l <= 1 ? color.toHsl().l * 100 : color.toHsl().l,
    });
  });
  // console.log(colors);
  return (
    <Stack width="100%">
      <Typography variant={isSmallScreen ? "h5" : "h4"} fontWeight="500">
        Hue
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {colors.map((color, idx) => (
          <ColorBadge
            key={idx}
            color={color}
            onClick={() => setColor(color)}
            selectedColor={selectedColor.toHex()}
          />
        ))}
      </Box>
    </Stack>
  );
}
