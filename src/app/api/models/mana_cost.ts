/* tslint:disable */
import { Colors } from './colors';
export interface ManaCost {
  cost?: string;
  cmc?: number;
  colors?: Colors;
  colorless?: boolean;
  monocolored?: boolean;
  multicolored?: boolean;
}
