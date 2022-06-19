import { Grid, Stack, Typography } from "@mui/material";
import { CirclePicker, GithubPicker, MaterialPicker } from "react-color";

export default function ColorDashboard({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}) {
  //   const theme = useTheme();
  //   const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Stack>
          <Typography variant="h4" fontWeight="500">
            Pick or enter a color
          </Typography>
          <CirclePicker
            color={selectedColor}
            onChange={(color) => setSelectedColor(color.hex)}
          />
          <GithubPicker
            onChange={(color) => setSelectedColor(color.hex)}
            color={selectedColor}
          />
          <MaterialPicker
            onChange={(color) => setSelectedColor(color.hex)}
            color={selectedColor}
          />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack>
          <Typography variant="h4" fontWeight="500">
            Selected
          </Typography>
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
      </Grid>
    </Grid>
  );
}
