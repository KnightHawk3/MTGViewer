import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {CollectionService} from '../../core/service/collection.service';
import {Card} from '../../api/models/card';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-collection-import',
  template: `
    <div>
      <form (ngSubmit)="onSubmit()">
        <label>
          Collection:
          <textarea [formControl]="collectionList"></textarea>
        </label>
        <button type="submit">Go!</button>
      </form>
      <div *ngIf="$cards">
        <app-card-grid [cards]="$cards"></app-card-grid>
      </div>
    </div>
  `,
  styles: []
})
export class CollectionImportComponent implements OnInit {
  collectionList = new FormControl('');
  $cards: Observable<Array<Card>>;

  constructor(private collectionSevice: CollectionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.collectionSevice.setCollection(this.collectionList.value.split(/\r?\n/));
    this.$cards = this.collectionSevice.getCollection();
  }
}
