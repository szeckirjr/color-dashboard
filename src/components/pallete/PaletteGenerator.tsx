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
        width: "100%",
        flexShrink: 1,
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
          justifyContent: isSmallScreen ? "center" : "flex-start",
          alignItems: isSmallScreen ? "flex-start" : "flex-start",
          overflow: "scroll",
          position: "relative",
          padding: 1,
          maxWidth: "600px",
          maxHeight: isReallySmallScreen ? "60vh" : "initial",
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
            // disabled={colors.includes(selectedColor)}
            sx={{}}
            size="large"
            aria-label="close"
            color="inherit"
            onClick={() => {
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
