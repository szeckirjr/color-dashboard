import { Box, IconButton, Snackbar, useTheme } from "@mui/material";
import { useContext, useState, Fragment } from "react";
import { ColorModeContext } from "../App";
import ColorDashboard from "../components/ColorDashboard";
import CloseIcon from "@mui/icons-material/Close";

import Header from "./Header";
import ColorViewer from "./ColorViewer";

export const initial = [
  "#03071e",
  "#370617",
  "#6a040f",
  "#9d0208",
  "#d00000",
  "#dc2f02",
  "#e85d04",
  "#ff6d00",
  "#ff7900",
  "#ff8500",
  "#ff9100",
  "#f48c06",
  "#ff9e00",
  "#faa307",
  "#ffba08",
];

export default function Dashboard() {
  const theme = useTheme();
  const { mode } = theme.palette;
  var randColor = initial[Math.floor(Math.random() * initial.length)];
  const [selectedCol, setSelectedCol] = useState(randColor);
  const [open, setOpen] = useState(false);

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
        overflow: "hidden",
        height: "100vh",
        bgcolor: mode === "light" ? "#f2f2f2" : "#262626",
        color: "text.primary",
        p: 3,
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
