import {
  Box,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useState, Fragment } from "react";
import { ColorModeContext } from "../App";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import ColorDashboard from "./ColorDashboard";
import CloseIcon from "@mui/icons-material/Close";
import { selectColor } from "../utils/functions";
import AbcIcon from "@mui/icons-material/Abc";

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
  const colorMode = useContext(ColorModeContext);
  var randColor = initial[Math.floor(Math.random() * initial.length)];
  const [selectedCol, setSelectedCol] = useState(randColor);
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "baseline",
          }}
          spacing={1}
        >
          <Typography variant="h2" fontWeight="bold">
            Colors
          </Typography>
          <Typography
            sx={{
              // position: "absolute",
              // bottom: "20px",
              // right: "20px",
              color: "#a6a6a6",
              "&:hover": {
                color: mode === "light" ? "black" : "white",
              },
              transition: "color 0.4s ease-in-out",
            }}
            variant="h5"
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
        </Stack>
        <Box>
          <IconButton size="large" onClick={colorMode.toggleColorMode}>
            {mode === "light" ? (
              <Brightness2Icon fontSize="large" />
            ) : (
              <LightModeIcon fontSize="large" />
            )}
          </IconButton>
          <IconButton size="large">
            <AbcIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "5px",
          "&:hover": {
            cursor: "pointer",
            borderRadius: "15px",
          },
          transition: "all 0.3s ease-in-out",
        }}
        //height="45px"
        bgcolor={selectedCol}
        mb={4}
        onClick={() => selectColor(selectedCol, setOpen)}
        display="flex"
        justifyContent="space-evenly"
        py={2}
      >
        {showText && (
          <>
            <Typography variant="h5" fontWeight="bold" color="white">
              White Text
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="black">
              Black Text
            </Typography>
          </>
        )}
      </Box>
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
