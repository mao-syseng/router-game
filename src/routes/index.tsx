import { z } from "zod";
import { generateGrid } from "../game/randomShit";
import Controls from "../components/Controls";
import HelpBtn from "../components/HelpBtn";
import Grid from "../components/Grid";
import Title from "../components/Title";
import { useEffect } from "react";

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
  const navigate = Route.useNavigate();

  const { px, py } = state;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "h":
        case "ArrowLeft":
          navigate({
            search: (p) => ({ ...p, px: p.px - 1 }),
          });
          break;
        case "j":
        case "ArrowDown":
          navigate({
            search: (p) => ({ ...p, py: p.py + 1 }),
          });
          break;
        case "k":
        case "ArrowUp":
          navigate({
            search: (p) => ({ ...p, py: p.py - 1 }),
          });
          break;
        case "l":
        case "ArrowRight":
          navigate({
            search: (p) => ({ ...p, px: p.px + 1 }),
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const grid = generateGrid(state);
  return (
    <main>
      <HelpBtn />
      <Title />
      <Grid grid={grid} state={state} />
      <Controls state={state} px={px} py={py} />
    </main>
  );
}
