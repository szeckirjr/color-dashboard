import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ColorResult } from "react-color";
import { Colord, colord } from "colord";

export default function ColorBadge({
  badgeType,
  color,
  onClick,
  selectedColor,
}: {
  badgeType?: "badge" | "strip";
  color: Colord;
  onClick: (val: Colord) => void;
  selectedColor: string;
}) {
  return (
    <Box
      sx={{
        borderRadius: "0px",
        width: "100%",
        bgcolor: color.toHex(),
        cursor: "pointer",
        "&:hover": {
          borderRadius: 0,
          flexGrow: 2,
        },
        transition: "all 0.05s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        alignContent: "stretch",
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
