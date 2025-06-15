export const Route = createFileRoute({
  component: About,
});

function About() {
  return (
    <main>
      <div>
        <h3>About</h3>
        <p>
          The idea is a simple turn based grid game where all state lives in
          search params of the url.
        </p>
        <p>Benefits of this approach</p>
        <ul>
          <li>Easy to share the game state with others</li>
          <li>
            Easy to save the game state, fx with bookmarks or copy to clipboard
          </li>

          <li>Undo functionality would be free, just go back in browser</li>
          <li>Easy to debug the game state</li>
        </ul>
        <p>Recipe</p>
        <ul>
          <li>Combat from Crypt of the Necrodancer</li>
          <li>Game loop from Overbold</li>
          <li>Graphics from Uiua</li>
        </ul>
      </div>
    </main>
  );
}
