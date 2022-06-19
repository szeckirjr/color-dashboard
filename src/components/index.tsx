import { Box, IconButton, Snackbar, Typography, useTheme } from "@mui/material";
import { useContext, useState, Fragment } from "react";
import { ColorModeContext } from "../App";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import ColorDashboard from "./ColorDashboard";
import CloseIcon from "@mui/icons-material/Close";

export default function Dashboard() {
  const theme = useTheme();
  const { mode } = theme.palette;
  const colorMode = useContext(ColorModeContext);
  const initial = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#f9a825"];
  var randColor = initial[Math.floor(Math.random() * initial.length)];
  const [selectedCol, setSelectedCol] = useState(randColor);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(selectedCol);
  };

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
        maxWidth: "100vw",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        bgcolor: mode === "light" ? "#f2f2f2" : "#262626",
        color: "text.primary",
        p: 3,
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Colors
      </Typography>
      <Box
        sx={{
          borderRadius: "5px",
          "&:hover": {
            cursor: "pointer",
            borderRadius: "15px",
          },
          transition: "all 0.3s ease-in-out",
        }}
        width="95%"
        height="45px"
        bgcolor={selectedCol}
        mb={4}
        onClick={handleClick}
      />
      <ColorDashboard
        selectedColor={selectedCol}
        setSelectedColor={setSelectedCol}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        size="large"
        onClick={colorMode.toggleColorMode}
      >
        {mode === "light" ? (
          <Brightness2Icon fontSize="large" />
        ) : (
          <LightModeIcon fontSize="large" />
        )}
      </IconButton>
      <Typography
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "#a6a6a6",
          "&:hover": {
            color: mode === "light" ? "black" : "white",
          },
          transition: "color 0.4s ease-in-out",
        }}
        variant="h4"
        fontWeight="bold"
      >
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="https://wardo.dev/#/"
          target="_blank"
          rel="noreferrer"
        >
          wardo.dev
        </a>
      </Typography>
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
