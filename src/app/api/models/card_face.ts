/* tslint:disable */
import { Colors } from './colors';
import { ImageUri } from './image_uri';
export interface CardFace {
  name?: string;
  type_line?: string;
  oracle_text?: string;
  mana_cost?: string;
  colors?: Array<Colors>;
  color_indicator?: Array<Colors>;
  power?: string;
  toughness?: string;
  loyalty?: string;
  flavor_text?: string;
  illustration_id?: string;
  image_uris?: ImageUri;
}
