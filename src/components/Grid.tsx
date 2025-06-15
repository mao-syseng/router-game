import { Fragment } from "react";
import { gridHeight, gridWidth } from "../game/randomShit";
import Cell from "./Cell";
import type { GameState } from "../routes";

interface Props {
  state: GameState;
}

export default function Grid({ state }: Props) {
  return (
    <pre className="grid">
      {Array.from({ length: gridHeight }, (_, y) => (
        <Fragment key={`row-${y}`}>
          {Array.from({ length: gridWidth }, (_, x) => (
            <Cell key={`cell-${x}-${y}`} x={x} y={y} state={state} />
          ))}
          {"\n"}
        </Fragment>
      ))}
    </pre>
  );
}
