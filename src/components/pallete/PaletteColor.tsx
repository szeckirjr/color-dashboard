import { Box, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Colord, colord } from "colord";
import { DeleteForever } from "@mui/icons-material";

export default function PaletteColor({
  color,
  onClick,
  selectedColor,
  edit,
  removeColor,
}: {
  color: Colord;
  onClick: (val: Colord) => void;
  selectedColor: string;
  edit: boolean;
  removeColor: (hex: string) => void;
}) {
  return (
    <Box
      sx={{
        mr: "10px",
        mb: "10px",
        borderRadius: "10px",
        bgcolor: color.toHex(),
        cursor: "pointer",
        height: "60px",
        width: "60px",
        scale: "1",
        "&:hover": {
          scale: "1.15",
        },
        transition: "scale 0.2s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      onClick={() => !edit && onClick(color)}
    >
      {!edit && color.toHex() === selectedColor && (
        <CheckCircleIcon
          sx={{
            color: colord(color.toHex()).isLight() ? "black" : "white",
          }}
        />
      )}
      {edit && (
        <IconButton>
          <DeleteForever onClick={() => removeColor(color.toHex())} />
        </IconButton>
      )}
    </Box>
  );
}
