import { Link } from "@tanstack/react-router";
import { z } from "zod";

const gameStateSchema = z.object({
  px: z.number().catch(1),
  py: z.number().catch(1),
});

// type GameState = z.infer<typeof gameStateSchema>;

export const Route = createFileRoute({
  validateSearch: (search) => gameStateSchema.parse(search),
  component: Index,
});

function Index() {
  const { px, py } = Route.useSearch();
  return (
    <main>
      <Link to="/about" className="helpbtn" >?</Link>
      <pre>
        {`Game state: px=${px}, py=${py}`}
      </pre>
    </main>
  );
}
