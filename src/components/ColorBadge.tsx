import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Colord, colord } from "colord";

export default function ColorBadge({
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
        width: "100%",
        bgcolor: color.toHex(),
        cursor: "pointer",
        "&:hover": {
          flexGrow: 1.75,
          borderLeft: "1px solid #fff",
          borderRight: "1px solid #fff",
          zIndex: 1,
        },
        transition: "flex-grow 0.15s ease-in-out",
        display: "flex",
        flexGrow: 1,
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
