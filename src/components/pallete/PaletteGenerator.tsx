import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Colord, colord } from "colord";
import { useState, useEffect } from "react";
import { useReallySmallScreen, useSmallScreen } from "../../utils/functions";
import PaletteColor from "./PaletteColor";
import AddIcon from "@mui/icons-material/Add";
import { Edit, EditOff } from "@mui/icons-material";

export function PaletteGenerator({
  selectedColor,
  onClick,
}: {
  selectedColor: string;
  onClick: (val: Colord) => void;
}): JSX.Element {
  const isSmallScreen = useSmallScreen();
  const isReallySmallScreen = useReallySmallScreen();
  const [colors, setColors] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("wardo-color-palette") ?? "[]")
  );
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (colors) {
      window.localStorage.setItem(
        "wardo-color-palette",
        JSON.stringify(colors)
      );
    }
  }, [colors]);

  const removeColor = (hex: string) => {
    const idx = colors.indexOf(hex);
    if (idx) {
      setColors(colors.slice(0, idx).concat(colors.slice(idx + 1)));
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        flexShrink: 1,
      }}
    >
      <Stack
        direction="row"
        width="100%"
        display="flex"
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          p={1}
          fontWeight={500}
          variant={isReallySmallScreen ? "h5" : "h4"}
        >
          Palette
        </Typography>
        <IconButton size="medium" onClick={() => setEditMode(!editMode)}>
          {editMode ? (
            <EditOff fontSize="medium" />
          ) : (
            <Edit fontSize="medium" />
          )}
        </IconButton>
      </Stack>
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
              onClick={() => {
                setEditMode(false);
                onClick(colord(color));
              }}
              selectedColor={selectedColor}
              edit={editMode}
              removeColor={removeColor}
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
            size="large"
            aria-label="close"
            color="inherit"
            onClick={() => {
              !colors.includes(selectedColor) &&
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
