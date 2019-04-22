import {Injectable} from '@angular/core';
import {Card} from '../../api/models/card';
import {CardsService} from '../../api/services/cards.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CardList} from '../../api/models';
import {flatMap, map, reduce, tap} from 'rxjs/operators';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private cachedCollection: Card[] | null;
  private COLLECTION_STRING = 'collection';
  private COLLECTION_MAX_REQUEST_SIZE = 75;

  constructor(private cardService: CardsService,
              protected localStorage: LocalStorage,
              private http: HttpClient) {
  }

  setCollection(collection: Array<string>): Observable<boolean> {
    this.cachedCollection = null;
    if (collection == null) {
      return this.localStorage.clear();
    }
    return this.localStorage.setItem(this.COLLECTION_STRING, collection);
  }

  getCollection(): Observable<Card[]> {
    if (this.cachedCollection) {
      return of(this.cachedCollection);
    } else {
      return this.localStorage.getItem<string[]>(this.COLLECTION_STRING).pipe(
        map((collection: string[]): string[][] => {
          // Split into array of arrays of maximum length
          return collection.reduce(
            (accumulator, currentValue, currentIndex) =>
              (currentIndex % this.COLLECTION_MAX_REQUEST_SIZE) ? accumulator
                : [...accumulator, collection.slice(currentIndex, currentIndex + this.COLLECTION_MAX_REQUEST_SIZE)]
            , []);
        }),
        map((chunks: string[][]) => {
          // Create an array of requests
          const requests: Observable<Card[]>[] = [];
          chunks.forEach((list: string[]) => {
            const postData: { identifiers: Array<{ name: string }> } = {
              identifiers: list.map((it) => ({name: it}))
            };
            requests.push(this.http.post<CardList>(this.cardService.rootUrl + '/cards/collection', postData).pipe(
              map((it: CardList) => it.data)));
          });
          return requests;
        }),
        // Flatten the arrays down into one request
        flatMap((it) => it),
        flatMap((it) => it),
        reduce((acc: Card[], value: Card[]) => acc.concat(value)),
        tap((it) => this.cachedCollection = it)
      );
    }
  }
}
