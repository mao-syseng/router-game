export const gridSize = 10;

export interface Game {
  p: P;
  foes: Foe[];
}

export interface Foe {
  x: number;
  y: number;
  flip: boolean;
  hp: number;
  type: number;
}

export interface P {
  x: number;
  y: number;
  flip: boolean;
  sprite: number;
}

export function encodeFoe(enemy: Foe): string {
  const flippedFlag = enemy.flip ? 1 : 0;
  return `${enemy.x}${enemy.y}${flippedFlag}${enemy.hp}${enemy.type}`;
}

export function decodeFoe(code: string): Foe {
  if (code.length !== 5 || !/^\d{5}$/.test(code)) {
    throw new Error(`Invalid enemy code: "${code}"`);
  }

  const [x, y, flipFlag, hp, type] = code.split("").map(Number);
  return {
    x,
    y,
    flip: flipFlag === 1,
    hp,
    type,
  };
}

export function nextGameState(key: string, g: Game): Game {
  let { x, y, flip, sprite } = g.p;

  switch (key) {
    case "ArrowLeft":
      flip = true;
      x = Math.max(0, x - 1);
      break;
    case "ArrowRight":
      flip = false;
      x = Math.min(gridSize - 1, x + 1);
      break;
    case "ArrowUp":
      y = Math.max(0, y - 1);
      break;
    case "ArrowDown":
      y = Math.min(gridSize - 1, y + 1);
      break;
  }

  return { ...g, p: { x, y, flip, sprite } };
}

export function nextPState(key: string, player: P, gridSize: number) {
  let { x, y, flip } = player;

  switch (key) {
    case "ArrowLeft":
      flip = true;
      x = Math.max(0, x - 1);
      break;
    case "ArrowRight":
      flip = false;
      x = Math.min(gridSize - 1, x + 1);
      break;
    case "ArrowUp":
      y = Math.max(0, y - 1);
      break;
    case "ArrowDown":
      y = Math.min(gridSize - 1, y + 1);
      break;
  }

  return { x, y, flip };
}
