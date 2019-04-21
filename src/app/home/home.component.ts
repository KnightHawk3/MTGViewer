import {Component, OnInit} from '@angular/core';
import {Card} from '../api/models/card';
import {Observable} from 'rxjs';
import {CardsService} from '../api/services/cards.service';
import {CollectionService} from '../core/service/collection.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="grid-container">
      <h1 class="mat-h1">Cards!</h1>
      <app-card-grid></app-card-grid>
    </div>`,
  styles: [`
    .grid-container {
      margin: 20px;
    }

    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }

    .more-button {
      position: absolute;
      top: 5px;
      right: 10px;
    }

    .dashboard-card-content {
      text-align: center;
    }

  `]
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
