import { Stack, Box, Typography, IconButton } from "@mui/material";
import { selectColor } from "../utils/functions";
import AbcIcon from "@mui/icons-material/Abc";
import { useState } from "react";

export default function ColorViewer({
  selectedCol,
  setOpen,
}: {
  selectedCol: string;
  setOpen: (val: boolean) => void;
}) {
  const [showText, setShowText] = useState(false);

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          borderRadius: "5px",
          "&:hover": {
            cursor: "pointer",
            borderRadius: "15px",
          },
          transition: "all 0.4s ease-in-out",
        }}
        //height="45px"
        bgcolor={selectedCol}
        mb={4}
        onClick={() => selectColor(selectedCol, setOpen)}
        display="flex"
        justifyContent="space-evenly"
        py={2}
        flexGrow={1}
      >
        <Typography
          sx={{
            opacity: showText ? 1 : 0,
            transition: "all 0.4s ease-in-out",
          }}
          variant="h5"
          fontWeight="bold"
          color="white"
        >
          White Text
        </Typography>
        <Typography
          sx={{ opacity: showText ? 1 : 0, transition: "all 0.4s ease-in-out" }}
          variant="h5"
          fontWeight="bold"
          color="black"
        >
          Black Text
        </Typography>
      </Box>
      <IconButton size="large">
        <AbcIcon fontSize="large" onClick={() => setShowText(!showText)} />
      </IconButton>
    </Stack>
  );
}
