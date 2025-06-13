import { Link } from "@tanstack/react-router";
import type { GameState } from "./routes";
import { getGlyph } from "./randomShit";

interface Props {
  state: GameState;
  x: number;
  y: number;
}

export default function Cell({ x, y, state }: Props) {
  const glyph = getGlyph(x, y, state);
  return (
    <Link style={{color: glyph.color}} to="/" search={{ ...state, px: x, py: y }} className="cell">
      {glyph.ch}
    </Link>
  );
}
