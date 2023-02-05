import { Box, Stack, Typography } from "@mui/material";
import { Colord, colord } from "colord";
import { useSmallScreen } from "../utils/functions";
import ColorBadge from "./ColorBadge";

export default function LighterDarkerColors({
  color,
  setColor,
  selectedColor,
}: {
  color: Colord;
  setColor: (color: Colord) => void;
  selectedColor: Colord;
}) {
  const isSmallScreen = useSmallScreen();

  const colors = [
    90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10,
  ].map((val) => {
    return colord({ h: color.toHsl().h, s: 100, l: val });
  });

  return (
    <Stack width="50%">
      <Typography
        sx={{
          wordWrap: "break-word",
        }}
        variant={isSmallScreen ? "h6" : "h5"}
        fontWeight="500"
      >
        Lighter to Darker
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
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
