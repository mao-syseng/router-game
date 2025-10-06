import { gridSize, nextPState } from "./helpers";
import { useFoes, useP } from "./hooks";
import { Cell } from "./Cell";

function App() {
  const [p, setP] = useP();
  const [foes, setFoes] = useFoes();

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    e.preventDefault();
    setP(nextPState(e.key, p, gridSize));
  }

  return (
    <main>
      <div tabIndex={0} className="grid" onKeyDown={onKeyDown}>
        {Array.from({ length: gridSize * gridSize }).map((_, i) => (
          <Cell p={p} x={i % gridSize} y={Math.floor(i / gridSize)} />
        ))}
      </div>
    </main>
  );
}

export default App;
