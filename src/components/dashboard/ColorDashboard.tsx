import { Stack } from "@mui/material";
import { Colord } from "colord";
import { useSmallScreen } from "../../utils/functions";
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
  const isSmallScreen = useSmallScreen();

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={2}
      display="flex"
    >
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          minHeight: isSmallScreen ? "60vh" : "70vh",
          transition: "height 2s ease-in-out",
        }}
        gap={isSmallScreen ? 1 : 2}
      >
        <Stack direction={"column"} spacing={1} flexGrow={2}>
          <MainColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <MainColorFields
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setOpen={setOpen}
          />
          {!isSmallScreen && (
            <PaletteGenerator
              selectedColor={selectedColor.toHex()}
              onClick={setSelectedColor}
            />
          )}
        </Stack>
        <Stack
          direction="row"
          width={isSmallScreen ? "100%" : "50%"}
          minHeight="40vh"
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
        {isSmallScreen && (
          <PaletteGenerator
            selectedColor={selectedColor.toHex()}
            onClick={setSelectedColor}
          />
        )}
      </Stack>
    </Stack>
  );
}
