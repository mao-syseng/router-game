import {
  useQueryState,
  parseAsArrayOf,
  parseAsString,
  parseAsInteger,
  parseAsBoolean,
} from "nuqs";
import { decodeFoe, type Foe, encodeFoe, type P } from "./helpers";

export function useFoes() {
  const [foesE, setFoesE] = useQueryState(
    "foes",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const foes = foesE.map(decodeFoe);

  const setFoes = (newFoes: Foe[]) => {
    const encoded = newFoes.map(encodeFoe);
    setFoesE(encoded);
  };

  return [foes, setFoes] as const;
}

export function useP() {
  const [x, setX] = useQueryState("px", parseAsInteger.withDefault(0));
  const [y, setY] = useQueryState("py", parseAsInteger.withDefault(0));
  const [flip, setFlip] = useQueryState(
    "pf",
    parseAsBoolean.withDefault(false)
  );
  const [sprite, setSprite] = useQueryState(
    "ps",
    parseAsInteger.withDefault(0)
  );

  const player: P = { x, y, flip, sprite };

  const setPlayer = (newState: Partial<P>) => {
    if (newState.x !== undefined) setX(newState.x);
    if (newState.y !== undefined) setY(newState.y);
    if (newState.flip !== undefined) setFlip(newState.flip);
    if (newState.sprite !== undefined) setSprite(newState.sprite);
  };

  return [player, setPlayer] as const;
}
