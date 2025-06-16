interface Props {
  turn: number;
}

export default function TurnCounter({ turn }: Props) {
  return (
    <pre style={{ position: "absolute", top: 0, left: 0, fontSize: "18px" }}>
      {turn}
    </pre>
  );
}
