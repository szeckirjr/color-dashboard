import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Colord } from "colord";
import { useReallySmallScreen } from "../utils/functions";
import { selectRandomColor } from ".";
import AbcIcon from "@mui/icons-material/Abc";

const Logo = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Typography
      sx={{
        color: "#a6a6a6",
        "&:hover": {
          color: mode === "light" ? "black" : "white",
        },
        transition: "color 0.4s ease-in-out",
        position: "relative",
        left: 5,
      }}
      variant="h6"
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
  );
};

export default function Header({
  mode,
  toggleClick,
  setSelectedColor,
  showText,
  setShowText,
}: {
  mode: "light" | "dark";
  toggleClick: () => void;
  setSelectedColor: (color: Colord) => void;
  showText: boolean;
  setShowText: (val: boolean) => void;
}) {
  const isReallySmallScreen = useReallySmallScreen();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        px: isReallySmallScreen ? 1 : 3,
      }}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "baseline",
        }}
        spacing={0.5}
      >
        <Typography
          variant={isReallySmallScreen ? "h4" : "h3"}
          fontWeight="bold"
          onClick={() => setSelectedColor(selectRandomColor())}
          sx={{
            cursor: "pointer",
          }}
        >
          Colors
        </Typography>
        <Logo />
      </Stack>
      <Box>
        <IconButton
          size={isReallySmallScreen ? "small" : "medium"}
          onClick={() => setShowText(!showText)}
        >
          <AbcIcon fontSize="large" />
        </IconButton>
        <IconButton
          size={isReallySmallScreen ? "small" : "medium"}
          onClick={() => toggleClick()}
        >
          {mode === "light" ? (
            <Brightness2Icon fontSize="large" />
          ) : (
            <LightModeIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
