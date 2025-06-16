import { doo, type Glyph } from "./glyphs";

export type FoeTypes =
  | "duplicate"
  | "pop"
  | "do"
  | "sine"
  | "under"
  | "eta"
  | "transpose";

export const getFoe = (id: FoeTypes) => {
  return { id, x: 5, y: 0 };
};
