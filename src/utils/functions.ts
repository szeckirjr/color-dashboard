export function selectColor(color: string, setOpen: (val: boolean) => void) {
  navigator.clipboard.writeText(color);
  setOpen(true);
}
