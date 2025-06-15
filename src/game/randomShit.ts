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

export const getNextTurn = (
  direction: Direction,
  currentState: GameState
): GameState =>
  produce(currentState, (draft) => {
    const { px, py } = getNextPosition(direction, currentState);
    draft.px = px;
    draft.py = py;
    draft.turn++;
  });

export const getNextPosition = (d: Direction, { px, py }: GameState) => {
  if (d === "up" && py > 0) return { px, py: py - 1 };
  if (d === "down" && py < gridHeight - 1) return { px, py: py + 1 };
  if (d === "left" && px > 0) return { px: px - 1, py };
  if (d === "right" && px < gridWidth - 1) return { px: px + 1, py };
  return { px, py };
};

export const getDirectionFromKey = (key: string): Direction | null => {
  if (key === "h" || key === "ArrowLeft") return "left";
  if (key === "j" || key === "ArrowDown") return "down";
  if (key === "k" || key === "ArrowUp") return "up";
  if (key === "l" || key === "ArrowRight") return "right";
  return null;
};
