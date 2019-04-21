/* tslint:disable */
import {LegalStatus} from './legal_status';

export interface Legality {
  standard?: LegalStatus;
  future?: LegalStatus;
  frontier?: LegalStatus;
  modern?: LegalStatus;
  legacy?: LegalStatus;
  pauper?: LegalStatus;
  vintage?: LegalStatus;
  penny?: LegalStatus;
  commander?: LegalStatus;
  OneVOne?: LegalStatus;
  duel?: LegalStatus;
  brawl?: LegalStatus;
}
