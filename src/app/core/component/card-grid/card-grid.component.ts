import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../api/models/card';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-grid',
  template: `
    <div class="grid" [ngStyle]="{'grid-template-columns': 'repeat(auto-fit, '  + cardWidth +  'px)'}">
      <app-card *ngFor="let card of (cards|async)" [card]="card"></app-card>
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-gap: 15px;
    }
  `]
})
export class CardGridComponent implements OnInit {
  MTG_CARD_HEIGHT = 680;
  MTG_CARD_WIDTH = 480;
  @Input() height = 300;
  RATIO = this.MTG_CARD_WIDTH / this.MTG_CARD_HEIGHT;
  cardWidth = this.height * this.RATIO;
  @Input() cards: Observable<Card[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
