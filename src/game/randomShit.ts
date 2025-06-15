import { character, gap, type Glyph } from "./glyphs";
import type { GameState } from "../routes";
import { produce } from "immer";

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

type Direction = "up" | "down" | "left" | "right";

export const calculateNextTurn = (
  direction: Direction,
  currentState: GameState
): GameState =>
  produce(currentState, (draft) => {
    switch (direction) {
      case "up":
        if (draft.py > 0) draft.py -= 1;
        break;
      case "down":
        if (draft.py < gridHeight - 1) draft.py += 1;
        break;
      case "left":
        if (draft.px > 0) draft.px -= 1;
        break;
      case "right":
        if (draft.px < gridWidth - 1) draft.px += 1;
        break;
    }
  });

export const getDirectionFromKey = (key: string): Direction | null => {
  if (key === "h" || key === "ArrowLeft") return "left";
  if (key === "j" || key === "ArrowDown") return "down";
  if (key === "k" || key === "ArrowUp") return "up";
  if (key === "l" || key === "ArrowRight") return "right";
  return null;
};
