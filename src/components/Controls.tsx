import { Link } from "@tanstack/react-router";
import { binding, range, by, minimum } from "../game/glyphs";
import type { GameState } from "../routes";

interface Props {
  state: GameState;
  px: number;
  py: number;
}

export default function Controls({ px, py, state }: Props) {
  return (
    <div className="controls">
      <Link to="/" className={binding.color} search={{ ...state, px: px - 1 }}>
        {binding.ch}
      </Link>
      <Link to="/" className={range.color} search={{ ...state, py: py - 1 }}>
        {range.ch}
      </Link>
      <Link to="/" className={minimum.color} search={{ ...state, py: py + 1 }}>
        {minimum.ch}
      </Link>
      <Link to="/" className={by.color} search={{ ...state, px: px + 1 }}>
        {by.ch}
      </Link>
    </div>
  );
}
