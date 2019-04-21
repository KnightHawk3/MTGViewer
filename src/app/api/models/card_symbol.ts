/* tslint:disable */
import { Colors } from './colors';
export interface CardSymbol {
  symbol?: string;
  loose_variant?: string;
  english?: string;
  transposable?: boolean;
  represents_mana?: boolean;
  cmc?: number;
  appears_in_mana_costs?: boolean;
  funny?: boolean;
  colors?: Colors;
}
