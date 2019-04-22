import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../api/models/card';

@Component({
  selector: 'app-card',
  template: `
    <div *ngIf="card">
      <span *ngIf="card.image_uris; then single else multiple"></span>
      <ng-template #single>
        <img [ngStyle]="{'height': height}" alt="{{card.name}} scanned" [src]="card.image_uris.border_crop"/>
      </ng-template>
      <ng-template #multiple>
        <img #multiple [ngStyle]="{'height': height}" alt="{{card.name}} scanned" [src]="card.card_faces[0].image_uris.border_crop"/>
      </ng-template>
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
