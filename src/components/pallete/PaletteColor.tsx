import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Colord, colord } from "colord";

export default function PaletteColor({
  color,
  onClick,
  selectedColor,
}: {
  color: Colord;
  onClick: (val: Colord) => void;
  selectedColor: string;
}) {
  return (
    <Box
      sx={{
        mr: "10px",
        mb: "10px",
        bgcolor: color.toHex(),
        cursor: "pointer",
        height: "80px",
        width: "80px",
        "&:hover": {
          borderLeft: "1px solid #fff",
          borderRight: "1px solid #fff",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => onClick(color)}
    >
      {color.toHex() === selectedColor && (
        <CheckCircleIcon
          sx={{
            color: colord(color.toHex()).isLight() ? "black" : "white",
          }}
        />
      )}
    </Box>
  );
}
