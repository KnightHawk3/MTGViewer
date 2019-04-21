/* tslint:disable */
type Colors =
  'W' |
  'U' |
  'B' |
  'R' |
  'G';
module Colors {
  export const W: Colors = 'W';
  export const U: Colors = 'U';
  export const B: Colors = 'B';
  export const R: Colors = 'R';
  export const G: Colors = 'G';
  export function values(): Colors[] {
    return [
      W,
      U,
      B,
      R,
      G
    ];
  }
}

export { Colors }