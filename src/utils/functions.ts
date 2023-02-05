import { useMediaQuery } from "@mui/material";
import { Colord } from "colord";

export function copyColorToClipboard(
  color: Colord,
  type: "hex" | "rgba",
  setTooltipOpen: (val: boolean) => void
) {
  navigator.clipboard.writeText(
    type === "hex" ? color.toHex().replaceAll("#", "") : color.toRgbString()
  );
  setTooltipOpen(true);
}

export const useSmallScreen = (): boolean => {
  const bigScreen = useMediaQuery("(min-width: 1000px)");
  return !bigScreen;
};

export const useReallySmallScreen = (): boolean => {
  const bigScreen = useMediaQuery("(min-width: 500px)");
  return !bigScreen;
};
