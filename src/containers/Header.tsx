import { Box, IconButton, Stack, Typography } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { colord } from "colord";
import { useReallySmallScreen } from "../utils/functions";

const Logo = ({ mode }: { mode: "light" | "dark" }) => {
  const isReallySmallScreen = useReallySmallScreen();
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
      variant={isReallySmallScreen ? "h6" : "h5"}
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
}: {
  mode: "light" | "dark";
  toggleClick: () => void;
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
        direction={isReallySmallScreen ? "column" : "row"}
        sx={{
          display: "flex",
          alignItems: "baseline",
        }}
        spacing={isReallySmallScreen ? -2 : 1}
      >
        <Typography
          variant={isReallySmallScreen ? "h3" : "h2"}
          fontWeight="bold"
        >
          Colors
        </Typography>
        <Logo mode={mode} />
      </Stack>
      <Box>
        <IconButton size="large" onClick={() => toggleClick()}>
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
