import { character, gap, type Glyph } from "./glyphs";
import type { GameState } from "./routes";

export function getGlyph(x: number, y: number, state: GameState): Glyph {
  if (x === state.px && y === state.py) return character;
  return gap;
}
