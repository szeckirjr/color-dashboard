import { Box, Stack, Typography } from "@mui/material";
import { PhotoshopPicker } from "react-color";
import { initial } from ".";
import { selectColor } from "../utils/functions";
import ColorBadge from "./ColorBadge";

export default function ColorDashboard({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  setOpen: (val: boolean) => void;
}) {
  //   const theme = useTheme();
  //   const { mode } = theme.palette;

  return (
    <Stack direction="row" spacing={2} display="flex">
      <Stack flexGrow={1}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight="500">
            Pick or enter a color
          </Typography>
          <Stack direction="row">
            <Box
              sx={{
                position: "relative",
                color: "black",
                cursor: "pointer",
                marginRight: "12px",
              }}
            >
              <PhotoshopPicker
                color={selectedColor}
                onChange={(color) => setSelectedColor(color.hex)}
              />
              <Box
                sx={{
                  height: "60px",
                  width: "110px",
                  bgcolor: selectedColor,
                  position: "absolute",
                  top: "35px",
                  right: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => selectColor(selectedColor, setOpen)}
              >
                <Typography>{selectedColor}</Typography>
              </Box>
              <Box
                sx={{
                  height: "130px",
                  width: "70px",
                  bgcolor: "#dcdcdc",
                  position: "absolute",
                  top: "35px",
                  left: "315px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
              }}
            >
              {initial.map((color) => (
                <ColorBadge onClick={setSelectedColor} color={color} />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack flexGrow={1}>
        <Stack>
          <Typography variant="h4" fontWeight="500">
            Lighter/Darker
          </Typography>
          <Typography variant="h4" fontWeight="500">
            Hue
          </Typography>
          <Typography variant="h4" fontWeight="500">
            Saturation
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
