import { glyphsByName } from "../game/glyphs";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const { glyphName } = Route.useParams();
  const glyph = glyphsByName[glyphName];
  return (
    <main>
      <div>
        <h2 className={glyph.color}>
          {glyph.ch} {glyph.name.toUpperCase()} {glyph.ch}
        </h2>
        <h4>{glyph.type}</h4>
        <h5>{glyph.desc}</h5>
        <a className="blue link" href={glyph.url}>
          Docs
        </a>
      </div>
    </main>
  );
}
