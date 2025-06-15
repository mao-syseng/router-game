import { Link, useNavigate } from "@tanstack/react-router";
import { binding, range, by, minimum } from "../game/glyphs";
import type { GameState } from "../routes";
import { calculateNextTurn, getDirectionFromKey } from "../game/randomShit";
import { useEffect } from "react";

const usePlayerControls = (currentState: GameState) => {
  const navigate = useNavigate({ from: "/" });

  useEffect(() => {
    const handleKeyboardControls = (event: KeyboardEvent) => {
      const d = getDirectionFromKey(event.key);
      if (d) navigate({ search: (p) => calculateNextTurn(d, p) });
    };

    window.addEventListener("keydown", handleKeyboardControls);
    return () => window.removeEventListener("keydown", handleKeyboardControls);
  }, [navigate, currentState]);
};

interface Props {
  state: GameState;
}

export default function Controls({ state }: Props) {
  usePlayerControls(state);
  return (
    <div className="controls">
      <Link
        to="/"
        className={binding.color}
        search={calculateNextTurn("left", state)}
      >
        {binding.ch}
      </Link>
      <Link
        to="/"
        className={range.color}
        search={calculateNextTurn("up", state)}
      >
        {range.ch}
      </Link>
      <Link
        to="/"
        className={minimum.color}
        search={calculateNextTurn("down", state)}
      >
        {minimum.ch}
      </Link>
      <Link
        to="/"
        className={by.color}
        search={calculateNextTurn("right", state)}
      >
        {by.ch}
      </Link>
    </div>
  );
}
