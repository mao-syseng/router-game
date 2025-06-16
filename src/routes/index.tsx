import { z } from "zod";
import Controls from "../components/Controls";
import HelpBtn from "../components/HelpBtn";
import Grid from "../components/Grid";
import Title from "../components/Title";
import TurnCounter from "../components/TurnCounter";
import { getFoe } from "../game/foes";

const foeSchema = z.object({
  id: z.string(),
  x: z.number().default(1),
  y: z.number().default(1),
});
export type Foe = z.infer<typeof foeSchema>;

const gameStateSchema = z.object({
  px: z.number().default(5),
  py: z.number().default(5),
  turn: z.number().default(0),
  foes: z.array(foeSchema).default([getFoe("do")]),
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
      <HelpBtn />
      <TurnCounter turn={state.turn} />
      <Title />
      <Grid state={state} />
      <Controls state={state} />
    </main>
  );
}
