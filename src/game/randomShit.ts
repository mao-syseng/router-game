import { character, gap, type Glyph } from "./glyphs";
import type { GameState } from "../routes";

export const gridWidth = 10;
export const gridHeight = 10;

export interface GCell {
  id: string;
  x: number;
  y: number;
  glyph: Glyph;
}

export function getGlyph(x: number, y: number, state: GameState): Glyph {
  if (x === state.px && y === state.py) return character;
  return gap;
}

function getKey(x: number, y: number): string {
  return `${x}-${y}`;
}

export function generateGrid(state: GameState): GCell[][] {
  return Array.from({ length: gridHeight }, (_, y) =>
    Array.from({ length: gridWidth }, (_, x) => {
      return {
        id: getKey(x, y),
        x,
        y,
        glyph: getGlyph(x, y, state),
      };
    })
  );
}