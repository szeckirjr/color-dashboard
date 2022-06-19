import { Box } from "@mui/material";

export default function ColorBadge({
  color,
  onClick,
}: {
  color: string;
  onClick: (val: string) => void;
}) {
  return (
    <Box
      sx={{
        margin: "8px",
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
      }}
      onClick={() => onClick(color)}
    />
  );
}
