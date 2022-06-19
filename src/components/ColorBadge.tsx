import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ColorResult } from "react-color";

export default function ColorBadge({
  color,
  onClick,
  selectedColor,
}: {
  color: ColorResult;
  onClick: (val: ColorResult) => void;
  selectedColor: string;
}) {
  console.log(color.hsl.h);
  return (
    <Box
      sx={{
        margin: "5px",
        borderRadius: "10px",
        height: "50px",
        width: "50px",
        bgcolor: color.hex,
        cursor: "pointer",
        scale: 1,
        "&:hover": {
          borderRadius: "4px",
          scale: 1.1,
        },
        transition: "all 0.3s ease-in-out",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:
          color.rgb.r * 0.299 + color.rgb.g * 0.587 + color.rgb.b * 0.114 > 186
            ? "black"
            : "white",
      }}
      onClick={() => onClick(color)}
    >
      {color.hex === selectedColor && <CheckCircleIcon />}
    </Box>
  );
}
