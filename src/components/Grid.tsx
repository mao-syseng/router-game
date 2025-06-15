import { Fragment } from "react";
import type { GCell } from "../game/randomShit";
import Cell from "./Cell";
import type { GameState } from "../routes";

interface Props {
  grid: GCell[][];
  state: GameState;
}

export default function Grid({ grid, state }: Props) {
  return (
    <pre className="grid">
      {grid.map((row, y) => (
        <Fragment key={`row-${y}`}>
          {row.map((cell) => (
            <Cell key={cell.id} x={cell.x} y={cell.y} state={state} />
          ))}
          {"\n"}
        </Fragment>
      ))}
    </pre>
  );
}
