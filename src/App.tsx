import {
  parseAsArrayOf,
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import glitchSamuraiIdle from "./assets/glitchSamuraiIdle.gif";
import { gridSize } from "./helpers";

function App() {
  const [, setPx] = useQueryState("px", parseAsInteger.withDefault(0));
  const [, setPy] = useQueryState("py", parseAsInteger.withDefault(0));
  const [, setPFlip] = useQueryState("pf", parseAsBoolean.withDefault(false));
  const [enemies, setEneies] = useQueryState(
    "foes",
    parseAsArrayOf(parseAsString)
  );

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    e.preventDefault();
    if (e.key === "ArrowLeft") {
      setPFlip(true);
      setPx((p) => Math.max(0, p - 1));
    }
    if (e.key === "ArrowRight") {
      setPFlip(false);
      setPx((p) => Math.min(gridSize - 1, p + 1));
    }
    if (e.key === "ArrowUp") {
      setPy((p) => Math.max(0, p - 1));
    }
    if (e.key === "ArrowDown") {
      setPy((p) => Math.min(gridSize - 1, p + 1));
    }
  }

  return (
    <main>
      <div tabIndex={0} className="grid" onKeyDown={onKeyDown}>
        {Array.from({ length: gridSize * gridSize }).map((_, i) => (
          <Cell x={i % gridSize} y={Math.floor(i / gridSize)} />
        ))}
      </div>
    </main>
  );
}

export default App;

function Cell({ x, y }: { x: number; y: number }) {
  const [px] = useQueryState("px", parseAsInteger.withDefault(0));
  const [py] = useQueryState("py", parseAsInteger.withDefault(0));
  const isPlayer = x === px && y === py;
  const [pFlip] = useQueryState("pf", parseAsBoolean.withDefault(false));

  return (
    <div
      className={`cell ${isPlayer && pFlip ? "flip" : ""}`}
      key={`${x}-${y}`}
    >
      {isPlayer && <img src={glitchSamuraiIdle} />}
    </div>
  );
}
