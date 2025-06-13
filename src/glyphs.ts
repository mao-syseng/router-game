export interface Glyph {
  ch: string;
  name: string;
  type: string;
  color: string;
  desc: string;
  url: string;
};

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

export const glyph = { dip, duplicate, pop, sine };
