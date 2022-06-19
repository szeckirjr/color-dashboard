import { Box, Typography } from "@mui/material";
import { ColorResult, PhotoshopPicker } from "react-color";
import { selectColor } from "../utils/functions";

export default function MainColorPicker({
  selectedColor,
  setSelectedColor,
  setOpen,
}: {
  selectedColor: ColorResult;
  setSelectedColor: (color: ColorResult) => void;
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
        color={selectedColor.hex}
        onChange={(color) => setSelectedColor(color)}
      />
      <Box
        sx={{
          height: "60px",
          width: "110px",
          bgcolor: selectedColor.hex,
          position: "absolute",
          top: "35px",
          right: "10px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color:
            selectedColor.rgb.r * 0.299 +
              selectedColor.rgb.g * 0.587 +
              selectedColor.rgb.b * 0.114 >
            186
              ? "black"
              : "white",
        }}
        onClick={() => selectColor(selectedColor.hex, setOpen)}
      >
        <Typography>{selectedColor.hex}</Typography>
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
