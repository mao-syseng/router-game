import { Link } from "@tanstack/react-router";

interface Props {
  turn: number;
}

export default function TurnCounter({ turn }: Props) {
  return (
    <Link to="/about" className="turnCounter">
      {turn}
    </Link>
  );
}
