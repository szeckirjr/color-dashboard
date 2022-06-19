import { Box, Stack, Typography } from "@mui/material";
import { initial } from "../containers";
import ColorBadge from "./ColorBadge";
import MainColorPicker from "./MainColorPicker";

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
            <MainColorPicker
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              setOpen={setOpen}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
                flexGrow: 1,
              }}
            >
              {initial.map((color) => (
                <ColorBadge
                  onClick={setSelectedColor}
                  color={color}
                  selectedColor={selectedColor}
                />
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
