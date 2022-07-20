import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Colord, colord } from "colord";
import { useState } from "react";
import { useReallySmallScreen, useSmallScreen } from "../../utils/functions";
import PaletteColor from "./PaletteColor";
import AddIcon from "@mui/icons-material/Add";

export function PaletteGenerator({
  selectedColor,
  onClick,
}: {
  selectedColor: string;
  onClick: (val: Colord) => void;
}): JSX.Element {
  const isSmallScreen = useSmallScreen();
  const isReallySmallScreen = useReallySmallScreen();
  const [colors, setColors] = useState<string[]>([]);

  return (
    <Stack
      sx={{
        position: isSmallScreen ? "fixed" : "initial",
        bottom: isSmallScreen ? "0" : "initial",
        width: "100%",
        backgroundColor: "#262626",
        zIndex: 3,
      }}
    >
      <Typography
        p={1}
        fontWeight={500}
        variant={isReallySmallScreen ? "h5" : "h4"}
      >
        Palette
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {colors.map((color, idx) => {
          console.log(color);
          return (
            <PaletteColor
              key={idx}
              color={colord(color)}
              onClick={() => onClick(colord(color))}
              selectedColor={selectedColor}
            />
          );
        })}
        <Tooltip
          arrow
          placement="top"
          title={<Typography>Add current color to palette</Typography>}
          disableInteractive
        >
          <IconButton
            disabled={isReallySmallScreen && colors.length >= 4}
            size="large"
            aria-label="close"
            color="inherit"
            onClick={() => {
              (!isReallySmallScreen || colors.length < 4) &&
                setColors([...colors, selectedColor]);
            }}
            // onClick={handleClose}
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
}
