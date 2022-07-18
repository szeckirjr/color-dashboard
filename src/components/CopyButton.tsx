import { Button, IconButton, Snackbar, SxProps, Theme } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { colord } from "colord";
import { Fragment, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function CopyButton({
  text,
  backgroundColor,
  style,
}: {
  text: string;
  backgroundColor: string;
  style?: Omit<SxProps<Theme>, "color">;
}): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CheckCircleIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<ContentCopyIcon />}
        onClick={handleClick}
        sx={{
          width: "50%",
          backgroundColor: backgroundColor,
          color: colord(backgroundColor).isLight() ? "black" : "white",
          "&:hover": {
            backgroundColor: colord(backgroundColor).darken().toHex(),
          },
        }}
      >
        Copy
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message="Copied to clipboard!"
        action={action}
      />
    </>
  );
}
