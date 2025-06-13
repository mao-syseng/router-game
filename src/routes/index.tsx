import { Link } from "@tanstack/react-router";
import { z } from "zod";
import Cell from "../Cell";
import { Fragment } from "react/jsx-runtime";
import { gridHeight, gridWidth } from "../gameConstants";

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
  return (
    <main>
      <Link to="/about" className="helpbtn">
        ?
      </Link>
      <pre>
        {Array.from({ length: gridWidth }).map((_, y) => (
          <Fragment key={y}>
            {Array.from({ length: gridHeight }).map((_, x) => (
              <Cell key={`${x}-${y}`} x={x} y={y} state={state}  />
            ))}
            {"\n"}
          </Fragment>
        ))}
      </pre>
    </main>
  );
}
