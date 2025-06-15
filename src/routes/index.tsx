import { z } from "zod";
import { generateGrid } from "../game/randomShit";
import Controls from "../components/Controls";
import HelpBtn from "../components/HelpBtn";
import Grid from "../components/Grid";
import Title from "../components/Title";

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
  const grid = generateGrid(state);

  return (
    <main>
      <HelpBtn />
      <Title />
      <Grid grid={grid} state={state} />
      <Controls state={state} />
    </main>
  );
}
