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
      <Stack flexGrow={1}>
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
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
                flexGrow: 1,
              }}
            >
              {initialObj.map((color, idx) => (
                <ColorBadge
                  key={idx}
                  onClick={setSelectedColor}
                  color={colord(color.hex)}
                  selectedColor={selectedColor.toHex()}
                />
              ))}
            </Box>
          </Stack>
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
        gap={2}
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
