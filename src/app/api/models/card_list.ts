/* tslint:disable */
import { Card } from './card';
export interface CardList {
  total_cards?: number;
  has_more?: boolean;
  next_page?: string;
  data?: Array<Card>;
}
