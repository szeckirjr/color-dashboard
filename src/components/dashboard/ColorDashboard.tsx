import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { colord, Colord } from "colord";
import { ColorResult } from "react-color";
import { initialObj } from "../../containers";
import { useSmallScreen } from "../../utils/functions";
import ColorBadge from "../ColorBadge";
import HueColors from "../HueColors";
import LighterDarkerColors from "../LighterDarkerColors";
import { MainColorFields } from "../MainColorFields";
import MainColorPicker from "../MainColorPicker";
import { PaletteGenerator } from "../pallete/PaletteGenerator";

export default function ColorDashboard({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: Colord;
  setSelectedColor: (color: Colord) => void;
  setOpen: (val: boolean) => void;
}) {
  //   const theme = useTheme();
  //   const { mode } = theme.palette;
  const isSmallScreen = useSmallScreen();

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={2}
      display="flex"
    >
      <Stack spacing={2} flexGrow={2}>
        <Typography variant={isSmallScreen ? "h5" : "h4"} fontWeight="500">
          Enter or pick a color
        </Typography>
        <MainColorFields
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Stack direction={"column"} gap={5}>
          <MainColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <PaletteGenerator
            selectedColor={selectedColor.toHex()}
            onClick={setSelectedColor}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          height: "70vh",
        }}
        gap={isSmallScreen ? 1 : 2}
      >
        <LighterDarkerColors
          color={selectedColor}
          setColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <HueColors
          color={selectedColor}
          setColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </Stack>
    </Stack>
  );
}
