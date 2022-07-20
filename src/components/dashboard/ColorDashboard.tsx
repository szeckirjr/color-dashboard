import { Stack, Typography } from "@mui/material";
import { Colord } from "colord";
import { useReallySmallScreen, useSmallScreen } from "../../utils/functions";
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
  const isReallySmallScreen = useReallySmallScreen();

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={2}
      display="flex"
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          minHeight: isSmallScreen ? "60vh" : "70vh",
          transition: "height 2s ease-in-out",
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
        {isSmallScreen && (
          <PaletteGenerator
            selectedColor={selectedColor.toHex()}
            onClick={setSelectedColor}
          />
        )}
      </Stack>
      <Stack spacing={2} flexGrow={3}>
        <Typography variant={isSmallScreen ? "h5" : "h4"} fontWeight="500">
          Enter or pick a color
        </Typography>

        <Stack direction={"column"} gap={5}>
          <MainColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </Stack>
        <MainColorFields
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        {!isSmallScreen && (
          <PaletteGenerator
            selectedColor={selectedColor.toHex()}
            onClick={setSelectedColor}
          />
        )}
      </Stack>
    </Stack>
  );
}
