import { Link } from "@tanstack/react-router";
import { z } from "zod";
import Cell from "../Cell";
import { gridHeight, gridWidth } from "../gameConstants";
import { binding, by, minimum, range } from "../glyphs";
import { Fragment } from "react";

const gameStateSchema = z.object({
  px: z.number().catch(1),
  py: z.number().catch(1),
});

export type GameState = z.infer<typeof gameStateSchema>;

export const Route = createFileRoute({
  validateSearch: (search) => gameStateSchema.parse(search),
  component: Index,
});

function Index() {
  const state = Route.useSearch();
  const { px, py } = state;
  return (
    <main>
      <Link to="/about" className="helpbtn">
        ?
      </Link>
      <pre>Necrobold</pre>
      <pre>
        {Array.from({ length: gridHeight }).map((_, y) => (
          <Fragment key={`row-${y}`}>
            {Array.from({ length: gridWidth }).map((_, x) => (
              <Cell key={`cell-${x}-${y}`} x={x} y={y} state={state} />
            ))}
            {"\n"}
          </Fragment>
        ))}
      </pre>
      <div className="controls">
        <Link
          to="/"
          className={binding.color}
          search={{ ...state, px: px - 1 }}
        >
          {binding.ch}
        </Link>
        <Link to="/" className={range.color} search={{ ...state, py: py - 1 }}>
          {range.ch}
        </Link>
        <Link
          to="/"
          className={minimum.color}
          search={{ ...state, py: py + 1 }}
        >
          {minimum.ch}
        </Link>
        <Link to="/" className={by.color} search={{ ...state, px: px + 1 }}>
          {by.ch}
        </Link>
      </div>
    </main>
  );
}
