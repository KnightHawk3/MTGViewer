import {Injectable} from '@angular/core';
import {Card} from '../../api/models/card';
import {CardsService} from '../../api/services/cards.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CardList} from '../../api/models';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  collection: Array<string>;

  constructor(private cardService: CardsService, private http: HttpClient) {
  }

  setCollection(collection: Array<string>): void {
    this.collection = collection;
  }

  getCollection(): Observable<Array<Card>> {
    const postData: { identifiers: Array<{ name: string }> } = {
      identifiers: this.collection.map((it) => ({name: it}))
    };
    return this.http.post<CardList>(this.cardService.rootUrl + '/cards/collection', postData).pipe(
      tap((it) => console.log(it)),
      map((it: CardList) => it.data));
  }
}
