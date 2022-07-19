import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Colord, colord } from "colord";
import { useState } from "react";
import { useReallySmallScreen } from "../../utils/functions";
import PaletteColor from "./PaletteColor";
import AddIcon from "@mui/icons-material/Add";

export function PaletteGenerator({
  selectedColor,
  onClick,
}: {
  selectedColor: string;
  onClick: (val: Colord) => void;
}): JSX.Element {
  const isReallySmallScreen = useReallySmallScreen();
  const [colors, setColors] = useState<string[]>([]);
  return (
    <Stack>
      <Typography
        pb={1}
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
