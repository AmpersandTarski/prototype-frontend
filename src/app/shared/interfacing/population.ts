export interface Population {
  atoms: Array<Atoms>;
  links: Array<Links>;
}

interface Atoms {
  atoms: Array<string>;
  concept: string;
}

interface Links {
  links: {
    src: string;
    tgt: string;
  };
}
