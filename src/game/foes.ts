import { doo, type Glyph } from "./glyphs";

interface Foe {
  x: number;
  y: number;
  g: Glyph;
}

export const fDoo: Foe = {
  x: 0,
  y: 0,
  g: doo,
};
