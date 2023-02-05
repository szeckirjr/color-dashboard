import { Box, Typography, Tooltip } from "@mui/material";
import {
  copyColorToClipboard,
  useReallySmallScreen,
  useSmallScreen,
} from "../utils/functions";

import { Colord } from "colord";

export default function ColorViewer({
  selectedCol,
  setOpen,
  showText,
}: {
  selectedCol: Colord;
  setOpen: (val: boolean) => void;
  showText: boolean;
}) {
  const isReallySmallScreen = useReallySmallScreen();
  const isSmallScreen = useSmallScreen();

  return (
    <Tooltip
      arrow
      title={<Typography>Click to copy!</Typography>}
      placement={isSmallScreen ? "bottom" : "top"}
      disableInteractive
    >
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
          transition: "all 0.2s ease-in-out",
          height: "100%",
        }}
        bgcolor={selectedCol.toHex()}
        py={showText ? 2 : 1}
        onClick={() => copyColorToClipboard(selectedCol, "hex", setOpen)}
        display="flex"
        justifyContent="space-evenly"
        flexGrow={1}
      >
        <Typography
          sx={{
            opacity: showText ? 1 : 0,
            transition: "all 0.25s ease-in-out",
          }}
          variant={isReallySmallScreen ? "h6" : "h5"}
          fontWeight="bold"
          color="white"
        >
          White{!isReallySmallScreen && " Text"}
        </Typography>
        <Typography
          sx={{
            opacity: showText ? 1 : 0,
            transition: "all 0.25s ease-in-out",
          }}
          variant={isReallySmallScreen ? "h6" : "h5"}
          fontWeight="bold"
          color="black"
        >
          Black{!isReallySmallScreen && " Text"}
        </Typography>
      </Box>
    </Tooltip>
  );
}
