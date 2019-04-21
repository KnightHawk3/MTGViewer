/* tslint:disable */
export interface Set {
  code?: string;
  mtgo_code?: string;
  name?: string;
  set_type?: 'core' | 'expansion' | 'masters' | 'masterpiece' | 'from_the_vault' | 'spellbook' | 'premium_deck' | 'duel_deck' | 'commander' | 'planechase' | 'conspiracy' | 'archenemy' | 'vanguard' | 'funny' | 'starter' | 'box' | 'promo' | 'token' | 'memorabilia' | 'treasure_chest';
  released_at?: string;
  block_code?: string;
  block?: string;
  parent_set_code?: string;
  card_count?: number;
  digital?: boolean;
  foil?: boolean;
  icon_svg_uri?: string;
  search_uri?: string;
}
