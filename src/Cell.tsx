import type { P } from "./helpers";
import glitchSamuraiIdle from "./assets/glitchSamuraiIdle.gif";

interface Props {
  x: number;
  y: number;
  p: P;
}

export function Cell({ x, y, p }: Props) {
  const isPlayer = x === p.x && y === p.y;

  return (
    <div
      className={`cell ${isPlayer && p.flip ? "flip" : ""}`}
      key={`${x}-${y}`}
    >
      {isPlayer && <img src={glitchSamuraiIdle} />}
    </div>
  );
}
