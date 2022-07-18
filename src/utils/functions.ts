import { useMediaQuery } from "@mui/material";
import { Colord } from "colord";

export function selectColor(color: Colord, setOpen: (val: boolean) => void) {
  navigator.clipboard.writeText(color.toHex());
  setOpen(true);
}

export const useSmallScreen = (): boolean => {
  const bigScreen = useMediaQuery("(min-width: 1000px)");
  return !bigScreen;
};

export const useReallySmallScreen = (): boolean => {
  const bigScreen = useMediaQuery("(min-width: 500px)");
  return !bigScreen;
};
