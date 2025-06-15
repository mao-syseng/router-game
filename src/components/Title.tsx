import { Link } from "@tanstack/react-router";
import {
  deshape,
  eta,
  floor,
  join,
  round,
  transpose,
  under,
} from "../game/glyphs";
import type { Glyph } from "../game/glyphs";

export default function Title() {
  return (
    <pre>
      <GlyphChar glyph={eta} />
      <GlyphChar glyph={round} />
      <GlyphChar glyph={join} />
      r
      <GlyphChar glyph={under} />
      <GlyphChar glyph={deshape} />
      <GlyphChar glyph={transpose} />
      <GlyphChar glyph={floor} />d
    </pre>
  );
}

interface Props {
  glyph: Glyph;
}
function GlyphChar({ glyph }: Props) {
  return (
    <Link
      to={`/glyphs/$glyphName`}
      params={{ glyphName: glyph.name }}
      className={glyph.color}
    >
      {glyph.ch}
    </Link>
  );
}
