import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ColorBadge({
  color,
  onClick,
  selectedColor,
}: {
  color: string;
  onClick: (val: string) => void;
  selectedColor: string;
}) {
  return (
    <Box
      sx={{
        margin: "5px",
        borderRadius: "10px",
        height: "50px",
        width: "50px",
        bgcolor: color,
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
      }}
      onClick={() => onClick(color)}
    >
      {color === selectedColor && <CheckCircleIcon />}
    </Box>
  );
}
