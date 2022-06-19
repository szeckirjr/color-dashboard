import { Box, Typography } from "@mui/material";
import { PhotoshopPicker } from "react-color";
import { selectColor } from "../utils/functions";

export default function MainColorPicker({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  setOpen: (val: boolean) => void;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
        cursor: "pointer",
        marginRight: "12px",
      }}
    >
      <PhotoshopPicker
        color={selectedColor}
        onChange={(color) => setSelectedColor(color.hex)}
      />
      <Box
        sx={{
          height: "60px",
          width: "110px",
          bgcolor: selectedColor,
          position: "absolute",
          top: "35px",
          right: "10px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => selectColor(selectedColor, setOpen)}
      >
        <Typography>{selectedColor}</Typography>
      </Box>
      <Box
        sx={{
          height: "130px",
          width: "70px",
          bgcolor: "#dcdcdc",
          position: "absolute",
          top: "35px",
          left: "315px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Box>
  );
}
