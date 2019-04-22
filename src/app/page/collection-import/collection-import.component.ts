import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CollectionService} from '../../core/service/collection.service';

@Component({
  selector: 'app-collection-import',
  template: `
    <div>
      <p *ngIf="success">Done!</p>
      <form (ngSubmit)="onSubmit()">
        <label>
          Collection:
          <textarea [formControl]="collectionList"></textarea>
        </label>
        <button type="submit">Go!</button>
      </form>
    </div>
  `,
  styles: []
})
export class CollectionImportComponent implements OnInit {
  collectionList = new FormControl('');
  success = false;

  constructor(private collectionSevice: CollectionService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.collectionSevice.setCollection(this.collectionList.value.split(/\r?\n/)).subscribe(
      (it) => this.success = it,
      (error) => console.error(error));
  }
}
