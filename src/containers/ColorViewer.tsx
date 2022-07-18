import { Stack, Box, Typography, IconButton, Tooltip } from "@mui/material";
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
    : "darkgray";

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tooltip
        arrow
        title="Click to copy"
        placement={isSmallScreen ? "bottom" : "top"}
        disableInteractive
      >
        <Box
          sx={{
            borderRadius: "15px",
            "&:hover": {
              cursor: "pointer",
              boxShadow: "0 0 50px 1px " + formattedColor,
            },
            transition: "all 0.4s ease-in-out",
          }}
          //height="45px"
          bgcolor={selectedCol.toHex()}
          mb={4}
          onClick={() => selectColor(selectedCol, setOpen)}
          display="flex"
          justifyContent="space-evenly"
          py={2}
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
    </Stack>
  );
}
