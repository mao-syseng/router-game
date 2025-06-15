import { character, gap, glyphsByName, type Glyph } from "./glyphs";
import type { Foe, GameState } from "../routes";
import { produce } from "immer";

export const gridWidth = 10;
export const gridHeight = 10;

export interface GCell {
  id: string;
  x: number;
  y: number;
}

export function getGlyph(
  x: number,
  y: number,
  { px, py, foes }: GameState
): Glyph {
  if (x === px && y === py) return character;
  const foe = findFoe(x, y, foes);
  if (foe) return glyphsByName[foe.id];

  return gap;
}

const findFoe = (x: number, y: number, foes: Foe[]): Foe | undefined =>
  foes.find((f) => f.x === x && f.y === y);

type Direction = "up" | "down" | "left" | "right";

export const getNextTurn = (
  direction: Direction,
  state: GameState
): GameState =>
  produce(state, (draft) => {
    const { px, py } = getNextPosition(direction, state);
    draft.px = px;
    draft.py = py;
    draft.foes = moveFoesTowardPlayer(state.foes, state.px, state.py);
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

export const getNextPositionFoe = (
  fx: number,
  fy: number,
  px: number,
  py: number
): { x: number; y: number } => {
  const dx = px - fx;
  const dy = py - fy;

  if (Math.abs(dx) > Math.abs(dy)) {
    return { x: fx + Math.sign(dx), y: fy };
  } else if (dy !== 0) {
    return { x: fx, y: fy + Math.sign(dy) };
  }

  return { x: fx, y: fy };
};

export const moveFoesTowardPlayer = (
  foes: Foe[],
  px: number,
  py: number
): { id: string; x: number; y: number }[] => {
  return foes.map((foe) => {
    const dx = px - foe.x;
    const dy = py - foe.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      return { ...foe, x: foe.x + Math.sign(dx) };
    } else if (dy !== 0) {
      return { ...foe, y: foe.y + Math.sign(dy) };
    }

    return foe;
  });
};
