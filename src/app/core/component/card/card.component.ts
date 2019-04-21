import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../api/models/card';

@Component({
  selector: 'app-card',
  template: `
    <div *ngIf="card">
      <img *ngIf="card.image_uris" [ngStyle]="{'height': height}" alt="{{card.name}} scanned" [src]="card.image_uris.border_crop"/>
      <img *ngIf="card?.card_faces?.length > 1" [ngStyle]="{'height': height}" alt="{{card.name}} scanned"
           [src]="card.card_faces[0].image_uris.normal"/>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() height = '300px';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.card);
  }
}
