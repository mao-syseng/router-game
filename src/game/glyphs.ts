type GlyphType =
  | "Monadic 0-output function"
  | "Monadic pervasive function"
  | "Monadic modifier"
  | "Monadic function"
  | "Dyadic pervasive function"
  | "Dyadic function"
  | "Dyadic modifier"
  | "Constant"
  | "";

type GlyphColor =
  | "black"
  | "green"
  | "yellow"
  | "teal"
  | "blue"
  | "orange"
  | "purple"
  | "trans";

export interface Glyph {
  ch: string;
  name: string;
  type: GlyphType;
  color: GlyphColor;
  desc: string;
  url: string;
}

export const duplicate: Glyph = {
  ch: ".",
  name: "duplicate",
  type: "Monadic 0-output function",
  color: "black",
  desc: "Duplicate the top value on the stack",
  url: "https://www.uiua.org/docs/duplicate",
};

export const pop: Glyph = {
  ch: "◌",
  name: "pop",
  type: "Monadic 0-output function",
  color: "black",
  desc: "Discard the top stack value",
  url: "https://www.uiua.org/docs/pop",
};

export const sine: Glyph = {
  ch: "∿",
  name: "sine",
  type: "Monadic pervasive function",
  desc: "Get the sine of a number",
  url: "https://www.uiua.org/docs/sine",
  color: "green",
};

export const dip: Glyph = {
  ch: "⊙",
  name: "dip",
  type: "Monadic modifier",
  color: "yellow",
  desc: "Temporarily pop the top value off the stack and call a function",
  url: "https://www.uiua.org/docs/dip",
};

export const character: Glyph = {
  ch: "@",
  name: "character",
  type: "",
  color: "teal",
  desc: "Characters are represented as 32-bit Unicode codepoints.",
  url: "https://www.uiua.org/tutorial/types#characters",
};

export const gap: Glyph = {
  ch: "⋅",
  name: "gap",
  type: "Monadic modifier",
  color: "yellow",
  desc: "Discard the top stack value then call a function",
  url: "https://www.uiua.org/docs/gap",
};

export const range: Glyph = {
  ch: "⇡",
  name: "range",
  type: "Monadic function",
  color: "green",
  desc: "Make an array of all natural numbers less than a number",
  url: "https://www.uiua.org/docs/range",
};

export const minimum: Glyph = {
  ch: "↧",
  name: "minimum",
  type: "Dyadic pervasive function",
  color: "blue",
  desc: "Take the minimum of two arrays",
  url: "https://www.uiua.org/docs/minimum",
};

export const binding: Glyph = {
  ch: "←",
  name: "binding",
  type: "Monadic pervasive function",
  color: "black",
  desc: "Bindings are global names that can be given to Uiua values",
  url: "https://www.uiua.org/docs/binding",
};

export const by: Glyph = {
  ch: "⊸",
  name: "by",
  type: "Monadic modifier",
  color: "yellow",
  desc: "Duplicate a function's last argument before calling it",
  url: "https://www.uiua.org/docs/by",
};

export const join: Glyph = {
  ch: "⊂",
  name: "pop",
  type: "Dyadic function",
  color: "blue",
  desc: "Append two arrays end-to-end",
  url: "https://www.uiua.org/docs/join",
};

export const round: Glyph = {
  ch: "⁅",
  name: "round",
  type: "Monadic pervasive function",
  color: "green",
  desc: "Round to the nearest integer",
  url: "https://www.uiua.org/docs/round",
};

export const power: Glyph = {
  ch: "ⁿ",
  name: "power",
  type: "Dyadic pervasive function",
  color: "blue",
  desc: "Raise a value to a power",
  url: "https://www.uiua.org/docs/power",
};

export const eta: Glyph = {
  ch: "η",
  name: "eta",
  type: "Constant",
  color: "orange",
  desc: "The number of radians in a quarter circle",
  url: "https://www.uiua.org/docs/eta",
};

export const under: Glyph = {
  ch: "⍜",
  name: "under",
  type: "Dyadic modifier",
  color: "purple",
  desc: "Operate on a transformed array, then reverse the transformation",
  url: "https://www.uiua.org/docs/under",
};

export const transpose: Glyph = {
  ch: "⍉",
  name: "transpose",
  type: "Monadic function",
  color: "trans",
  desc: "Rotate the shape of an array",
  url: "https://www.uiua.org/docs/transpose",
};

export const deshape: Glyph = {
  ch: "♭",
  name: "deshape",
  type: "Monadic function",
  color: "green",
  desc: "Make an array 1-dimensional",
  url: "https://www.uiua.org/docs/deshape",
};

export const floor: Glyph = {
  ch: "⌊",
  name: "floor",
  type: "Monadic pervasive function",
  color: "green",
  desc: "Round to the nearest integer towards ¯∞",
  url: "https://www.uiua.org/docs/floor",
};

export const glyph = { dip, duplicate, pop, sine };
