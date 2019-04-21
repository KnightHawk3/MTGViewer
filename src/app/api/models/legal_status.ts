/* tslint:disable */
type LegalStatus =
  'legal' |
  'not_legal' |
  'restricted' |
  'banned';
module LegalStatus {
  export const LEGAL: LegalStatus = 'legal';
  export const NOT_LEGAL: LegalStatus = 'not_legal';
  export const RESTRICTED: LegalStatus = 'restricted';
  export const BANNED: LegalStatus = 'banned';
  export function values(): LegalStatus[] {
    return [
      LEGAL,
      NOT_LEGAL,
      RESTRICTED,
      BANNED
    ];
  }
}

export { LegalStatus }
