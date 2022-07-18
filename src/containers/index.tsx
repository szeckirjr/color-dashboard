import { Box, IconButton, Snackbar, useTheme } from "@mui/material";
import { useContext, useState, Fragment } from "react";
import { ColorModeContext } from "../App";
import ColorDashboard from "../components/dashboard/ColorDashboard";
import CloseIcon from "@mui/icons-material/Close";

import Header from "./Header";
import ColorViewer from "./ColorViewer";
import { ColorResult } from "react-color";
import { colord, Colord } from "colord";
import { useReallySmallScreen } from "../utils/functions";

export const initial = [
  "#F8BBD0",
  "#F48FB1",
  "#F06292",
  "#EC407A",
  "#E91E63",
  "#D81B60",
  "#C2185B",
  "#AD1457",
  "#880E4F",
  "#FF80AB",
  "#FF4081",
  "#F50057",
  "#C51162",
  "#F3E5F5",
  "#E1BEE7",
  "#CE93D8",
  "#BA68C8",
  "#AB47BC",
  "#9C27B0",
  "#8E24AA",
  "#7B1FA2",
  "#6A1B9A",
  "#4A148C",
  "#EA80FC",
  "#E040FB",
  "#D500F9",
  "#AA00FF",
  "#EDE7F6",
  "#D1C4E9",
  "#B39DDB",
  "#9575CD",
  "#7E57C2",
  "#673AB7",
  "#5E35B1",
  "#512DA8",
  "#4527A0",
  "#311B92",
  "#B388FF",
  "#7C4DFF",
  "#651FFF",
  "#6200EA",
  "#E8EAF6",
  "#C5CAE9",
  "#9FA8DA",
  "#7986CB",
  "#5C6BC0",
  "#3F51B5",
  "#3949AB",
  "#303F9F",
  "#283593",
  "#1A237E",
  "#8C9EFF",
  "#536DFE",
  "#3D5AFE",
  "#304FFE",
  "#E3F2FD",
  "#BBDEFB",
  "#90CAF9",
  "#64B5F6",
  "#42A5F5",
  "#2196F3",
  "#1E88E5",
  "#1976D2",
  "#1565C0",
  "#0D47A1",
  "#82B1FF",
  "#448AFF",
  "#2979FF",
  "#2962FF",
  "#E1F5FE",
  "#B3E5FC",
  "#81D4FA",
  "#4FC3F7",
  "#29B6F6",
  "#03A9F4",
  "#039BE5",
  "#0288D1",
  "#0277BD",
  "#01579B",
  "#80D8FF",
  "#40C4FF",
  "#00B0FF",
  "#0091EA",
  "#E0F7FA",
  "#B2EBF2",
  "#80DEEA",
  "#4DD0E1",
  "#26C6DA",
  "#00BCD4",
  "#00ACC1",
  "#0097A7",
  "#00838F",
  "#006064",
  "#84FFFF",
  "#18FFFF",
  "#00E5FF",
  "#00B8D4",
  "#E0F2F1",
  "#B2DFDB",
  "#80CBC4",
  "#4DB6AC",
  "#26A69A",
  "#009688",
  "#00897B",
  "#00796B",
  "#00695C",
  "#004D40",
  "#A7FFEB",
  "#64FFDA",
  "#1DE9B6",
  "#00BFA5",
  "#E8F5E9",
  "#C8E6C9",
  "#A5D6A7",
  "#81C784",
  "#66BB6A",
  "#4CAF50",
  "#43A047",
  "#388E3C",
  "#2E7D32",
  "#1B5E20",
  "#B9F6CA",
  "#69F0AE",
  "#00E676",
  "#00C853",
  "#F1F8E9",
  "#DCEDC8",
  "#C5E1A5",
  "#AED581",
  "#9CCC65",
  "#8BC34A",
  "#7CB342",
  "#689F38",
  "#558B2F",
  "#33691E",
  "#CCFF90",
  "#B2FF59",
  "#76FF03",
  "#64DD17",
  "#F9FBE7",
  "#F0F4C3",
  "#E6EE9C",
  "#DCE775",
  "#D4E157",
  "#CDDC39",
  "#C0CA33",
  "#AFB42B",
  "#9E9D24",
  "#827717",
  "#F4FF81",
  "#EEFF41",
  "#C6FF00",
  "#AEEA00",
  "#FFFDE7",
  "#FFF9C4",
  "#FFF59D",
  "#FFF176",
  "#FFEE58",
  "#FFEB3B",
  "#FDD835",
  "#FBC02D",
  "#F9A825",
  "#F57F17",
  "#FFFF8D",
  "#FFFF00",
  "#FFEA00",
  "#FFD600",
  "#FFF8E1",
  "#FFECB3",
  "#FFE082",
  "#FFD54F",
  "#FFCA28",
  "#FFC107",
  "#FFB300",
  "#FFA000",
  "#FF8F00",
  "#FF6F00",
  "#FFE57F",
  "#FFD740",
  "#FFC400",
  "#FFAB00",
  "#FFF3E0",
  "#FFE0B2",
  "#FFCC80",
  "#FFB74D",
  "#FFA726",
  "#FF9800",
  "#FB8C00",
  "#F57C00",
  "#EF6C00",
  "#E65100",
  "#FFD180",
  "#FFAB40",
  "#FF9100",
  "#FF6D00",
  "#FBE9E7",
  "#FFCCBC",
  "#FFAB91",
  "#FF8A65",
  "#FF7043",
  "#FF5722",
  "#F4511E",
  "#E64A19",
  "#D84315",
  "#BF360C",
  "#FF9E80",
  "#FF6E40",
  "#FF3D00",
  "#DD2C00",
  "#EFEBE9",
  "#D7CCC8",
  "#BCAAA4",
  "#A1887F",
  "#8D6E63",
  "#795548",
  "#6D4C41",
  "#5D4037",
  "#4E342E",
  "#3E2723",
  "#FAFAFA",
  "#F5F5F5",
  "#EEEEEE",
  "#E0E0E0",
  "#BDBDBD",
  "#9E9E9E",
  "#757575",
  "#616161",
  "#424242",
  "#212121",
  "#ECEFF1",
  "#CFD8DC",
  "#B0BEC5",
  "#90A4AE",
  "#78909C",
  "#607D8B",
  "#546E7A",
  "#455A64",
  "#37474F",
  "#263238",
  "#000000",
];

export const initialObj: ColorResult[] = [
  {
    hex: "#f44336",
    rgb: { r: 244, g: 67, b: 54, a: 1 },
    hsl: { h: 4, s: 0.9, l: 0.58, a: 1 },
  },
  {
    hex: "#FFEBEE",
    rgb: { r: 255, g: 235, b: 238, a: 1 },
    hsl: { h: 351, s: 1, l: 0.96, a: 1 },
  },
  {
    hex: "#FFCDD2",
    rgb: { r: 255, g: 205, b: 210, a: 1 },
    hsl: { h: 354, s: 1, l: 0.9, a: 1 },
  },
  {
    hex: "#EF9A9A",
    rgb: { r: 239, g: 154, b: 154, a: 1 },
    hsl: { h: 0, s: 0.73, l: 0.77, a: 1 },
  },
  {
    hex: "#E57373",
    rgb: { r: 229, g: 115, b: 115, a: 1 },
    hsl: { h: 0, s: 0.69, l: 0.67, a: 1 },
  },
  {
    hex: "#EF5350",
    rgb: { r: 239, g: 83, b: 80, a: 1 },
    hsl: { h: 1, s: 0.83, l: 0.63, a: 1 },
  },
  {
    hex: "#E53935",
    rgb: { r: 229, g: 57, b: 53, a: 1 },
    hsl: { h: 1, s: 0.77, l: 0.55, a: 1 },
  },
  {
    hex: "#D32F2F",
    rgb: { r: 211, g: 47, b: 47, a: 1 },
    hsl: { h: 0, s: 0.65, l: 0.51, a: 1 },
  },
  {
    hex: "#C62828",
    rgb: { r: 198, g: 40, b: 40, a: 1 },
    hsl: { h: 0, s: 0.66, l: 0.47, a: 1 },
  },
  {
    hex: "#B71C1C",
    rgb: { r: 183, g: 28, b: 28, a: 1 },
    hsl: { h: 0, s: 0.73, l: 0.41, a: 1 },
  },
  {
    hex: "#FF8A80",
    rgb: { r: 255, g: 138, b: 128, a: 1 },
    hsl: { h: 0, s: 1, l: 0.75, a: 1 },
  },
  {
    hex: "#FF5252",
    rgb: { r: 255, g: 82, b: 82, a: 1 },
    hsl: { h: 0, s: 1, l: 0.66, a: 1 },
  },
  {
    hex: "#FF1744",
    rgb: { r: 255, g: 23, b: 68, a: 1 },
    hsl: { h: 348, s: 1, l: 0.55, a: 1 },
  },
  {
    hex: "#D50000",
    rgb: { r: 213, g: 0, b: 0, a: 1 },
    hsl: { h: 0, s: 1, l: 0.42, a: 1 },
  },
  {
    hex: "#FCE4EC",
    rgb: { r: 252, g: 228, b: 236, a: 1 },
    hsl: { h: 340, s: 0.8, l: 0.94, a: 1 },
  },
];

export default function Dashboard() {
  const theme = useTheme();
  const { mode } = theme.palette;
  var randColor = initialObj[Math.floor(Math.random() * initialObj.length)];
  const [selectedCol, setSelectedCol] = useState<Colord>(colord(randColor.hex));
  const [open, setOpen] = useState(false);
  const isReallySmallScreen = useReallySmallScreen();

  const colorMode = useContext(ColorModeContext);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Box
      sx={{
        bgcolor: mode === "light" ? "#f2f2f2" : "#262626",
        color: "text.primary",
        p: isReallySmallScreen ? 1 : 3,
        transition: "all 0.4s ease-in-out",
      }}
    >
      <Header mode={mode} toggleClick={colorMode.toggleColorMode} />
      <ColorViewer selectedCol={selectedCol} setOpen={setOpen} />
      <ColorDashboard
        selectedColor={selectedCol}
        setSelectedColor={setSelectedCol}
        setOpen={setOpen}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="HEX code copied to clipboard!"
        action={action}
      />
    </Box>
  );
}
