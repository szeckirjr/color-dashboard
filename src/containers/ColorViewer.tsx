import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import {
  selectColor,
  useReallySmallScreen,
  useSmallScreen,
} from "../utils/functions";
import AbcIcon from "@mui/icons-material/Abc";
import { useState } from "react";
import { Colord } from "colord";

export default function ColorViewer({
  selectedCol,
  setOpen,
}: {
  selectedCol: Colord;
  setOpen: (val: boolean) => void;
}) {
  const [showText, setShowText] = useState(false);

  const isReallySmallScreen = useReallySmallScreen();
  const isSmallScreen = useSmallScreen();

  const formattedColor = selectedCol.isLight()
    ? selectedCol.toHex()
    : selectedCol.lighten(0.2).toHex();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 1,
        mb: 2,
      }}
    >
      <Tooltip
        arrow
        title={<Typography>Click to copy!</Typography>}
        placement={isSmallScreen ? "bottom" : "top"}
        disableInteractive
      >
        <Box
          sx={{
            borderRadius: "15px",
            "&:hover": {
              cursor: "pointer",
              boxShadow: "0 0 20px 0.01px " + formattedColor,
            },
            transition: "all 0.2s ease-in-out",
            // boxShadow: "0 0 20px 0.01px " + formattedColor,
            height: "100%",
          }}
          //height="45px"
          bgcolor={selectedCol.toHex()}
          py={2}
          onClick={() => selectColor(selectedCol, setOpen)}
          display="flex"
          justifyContent="space-evenly"
          flexGrow={1}
        >
          <Typography
            sx={{
              opacity: showText ? 1 : 0,
              transition: "all 0.4s ease-in-out",
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
              transition: "all 0.4s ease-in-out",
            }}
            variant={isReallySmallScreen ? "h6" : "h5"}
            fontWeight="bold"
            color="black"
          >
            Black{!isReallySmallScreen && " Text"}
          </Typography>
        </Box>
      </Tooltip>
      <IconButton size="large" onClick={() => setShowText(!showText)}>
        <AbcIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
