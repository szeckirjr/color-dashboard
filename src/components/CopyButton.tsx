import { IconButton, SxProps, Theme } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Colord, colord } from "colord";
import { copyColorToClipboard } from "../utils/functions";

export function CopyButton({
  color,
  colorMode,
  backgroundColor,
  style,
  setOpen,
}: {
  color: Colord;
  colorMode: "hex" | "rgba";
  backgroundColor: string;
  style?: Omit<SxProps<Theme>, "color">;
  setOpen: (val: boolean) => void;
}): JSX.Element {
  return (
    // <Button
    //   id="copy-button"
    //   variant="contained"
    //   color="primary"
    //   size="small"
    //   startIcon={<ContentCopyIcon />}
    //   onClick={() => copyColorToClipboard(color, setOpen)}
    //   sx={{
    //     width: "50%",
    //     backgroundColor: backgroundColor,
    //     color: colord(backgroundColor).isLight() ? "black" : "white",
    //     "&:hover": {
    //       backgroundColor: colord(backgroundColor).darken().toHex(),
    //     },
    //     ...style,
    //   }}
    // />
    <IconButton
      id="copy-button"
      size="small"
      onClick={() => copyColorToClipboard(color, colorMode, setOpen)}
      sx={{
        borderRadius: "0 5px 5px 0",
        backgroundColor: backgroundColor,
        color: colord(backgroundColor).isLight() ? "black" : "white",
        "&:hover": {
          backgroundColor: colord(backgroundColor).darken().toHex(),
        },
        ...style,
      }}
    >
      <ContentCopyIcon fontSize="small" />
    </IconButton>
  );
}
