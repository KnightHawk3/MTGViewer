/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CardList } from '../models/card_list';
import { Error } from '../models/error';
import { Card } from '../models/card';
import { Catalog } from '../models/catalog';
@Injectable({
  providedIn: 'root',
})
class CardsService extends __BaseService {
  static readonly CardsGetAllPath = '/cards';
  static readonly CardsSearchPath = '/cards/search';
  static readonly CardsGetNamedPath = '/cards/named';
  static readonly CardsAutocompletePath = '/cards/autocomplete';
  static readonly CardsGetRandomPath = '/cards/random';
  static readonly CardsGetByMultiverseIdPath = '/cards/multiverse/{id}';
  static readonly CardsGetByMtgoIdPath = '/cards/mtgo/{id}';
  static readonly CardsGetByArenaIdPath = '/cards/arena/{id}';
  static readonly CardsGetByCodeByNumberPath = '/cards/{code}/{number}';
  static readonly CardsGetByIdPath = '/cards/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param page undefined
   * @return Success
   */
  CardsGetAllResponse(page?: number): __Observable<__StrictHttpResponse<CardList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (page != null) __params = __params.set('page', page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CardList>;
      })
    );
  }
  /**
   * @param page undefined
   * @return Success
   */
  CardsGetAll(page?: number): __Observable<CardList> {
    return this.CardsGetAllResponse(page).pipe(
      __map(_r => _r.body as CardList)
    );
  }

  /**
   * @param params The `CardsService.CardsSearchParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `unique`:
   *
   * - `page`:
   *
   * - `order`:
   *
   * - `include_extras`:
   *
   * - `dir`:
   *
   * @return Success
   */
  CardsSearchResponse(params: CardsService.CardsSearchParams): __Observable<__StrictHttpResponse<CardList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.unique != null) __params = __params.set('unique', params.unique.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.includeExtras != null) __params = __params.set('include_extras', params.includeExtras.toString());
    if (params.dir != null) __params = __params.set('dir', params.dir.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CardList>;
      })
    );
  }
  /**
   * @param params The `CardsService.CardsSearchParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `unique`:
   *
   * - `page`:
   *
   * - `order`:
   *
   * - `include_extras`:
   *
   * - `dir`:
   *
   * @return Success
   */
  CardsSearch(params: CardsService.CardsSearchParams): __Observable<CardList> {
    return this.CardsSearchResponse(params).pipe(
      __map(_r => _r.body as CardList)
    );
  }

  /**
   * @param params The `CardsService.CardsGetNamedParams` containing the following parameters:
   *
   * - `version`:
   *
   * - `set`:
   *
   * - `pretty`:
   *
   * - `fuzzy`:
   *
   * - `format`:
   *
   * - `face`:
   *
   * - `exact`:
   *
   * @return Success
   */
  CardsGetNamedResponse(params: CardsService.CardsGetNamedParams): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.version != null) __params = __params.set('version', params.version.toString());
    if (params.set != null) __params = __params.set('set', params.set.toString());
    if (params.pretty != null) __params = __params.set('pretty', params.pretty.toString());
    if (params.fuzzy != null) __params = __params.set('fuzzy', params.fuzzy.toString());
    if (params.format != null) __params = __params.set('format', params.format.toString());
    if (params.face != null) __params = __params.set('face', params.face.toString());
    if (params.exact != null) __params = __params.set('exact', params.exact.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/named`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @param params The `CardsService.CardsGetNamedParams` containing the following parameters:
   *
   * - `version`:
   *
   * - `set`:
   *
   * - `pretty`:
   *
   * - `fuzzy`:
   *
   * - `format`:
   *
   * - `face`:
   *
   * - `exact`:
   *
   * @return Success
   */
  CardsGetNamed(params: CardsService.CardsGetNamedParams): __Observable<Card> {
    return this.CardsGetNamedResponse(params).pipe(
      __map(_r => _r.body as Card)
    );
  }

  /**
   * @param q undefined
   * @return Success
   */
  CardsAutocompleteResponse(q: string): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (q != null) __params = __params.set('q', q.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/autocomplete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalog>;
      })
    );
  }
  /**
   * @param q undefined
   * @return Success
   */
  CardsAutocomplete(q: string): __Observable<Catalog> {
    return this.CardsAutocompleteResponse(q).pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CardsGetRandomResponse(): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/random`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @return Success
   */
  CardsGetRandom(): __Observable<Card> {
    return this.CardsGetRandomResponse().pipe(
      __map(_r => _r.body as Card)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByMultiverseIdResponse(id: number): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/multiverse/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByMultiverseId(id: number): __Observable<Card> {
    return this.CardsGetByMultiverseIdResponse(id).pipe(
      __map(_r => _r.body as Card)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByMtgoIdResponse(id: number): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/mtgo/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByMtgoId(id: number): __Observable<Card> {
    return this.CardsGetByMtgoIdResponse(id).pipe(
      __map(_r => _r.body as Card)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByArenaIdResponse(id: number): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/arena/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByArenaId(id: number): __Observable<Card> {
    return this.CardsGetByArenaIdResponse(id).pipe(
      __map(_r => _r.body as Card)
    );
  }

  /**
   * @param params The `CardsService.CardsGetByCodeByNumberParams` containing the following parameters:
   *
   * - `number`:
   *
   * - `code`:
   *
   * @return Success
   */
  CardsGetByCodeByNumberResponse(params: CardsService.CardsGetByCodeByNumberParams): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/${params.code}/${params.number}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @param params The `CardsService.CardsGetByCodeByNumberParams` containing the following parameters:
   *
   * - `number`:
   *
   * - `code`:
   *
   * @return Success
   */
  CardsGetByCodeByNumber(params: CardsService.CardsGetByCodeByNumberParams): __Observable<Card> {
    return this.CardsGetByCodeByNumberResponse(params).pipe(
      __map(_r => _r.body as Card)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  CardsGetByIdResponse(id: string): __Observable<__StrictHttpResponse<Card>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Card>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  CardsGetById(id: string): __Observable<Card> {
    return this.CardsGetByIdResponse(id).pipe(
      __map(_r => _r.body as Card)
    );
  }
}

module CardsService {

  /**
   * Parameters for CardsSearch
   */
  export interface CardsSearchParams {
    q: string;
    unique?: 'cards' | 'art' | 'prints';
    page?: number;
    order?: 'name' | 'set' | 'released' | 'rarity' | 'color' | 'usd' | 'tix' | 'eur' | 'cmc' | 'power' | 'toughness' | 'edhrec' | 'artist';
    includeExtras?: boolean;
    dir?: 'auto' | 'asc' | 'desc';
  }

  /**
   * Parameters for CardsGetNamed
   */
  export interface CardsGetNamedParams {
    version?: string;
    set?: string;
    pretty?: boolean;
    fuzzy?: string;
    format?: string;
    face?: string;
    exact?: string;
  }

  /**
   * Parameters for CardsGetByCodeByNumber
   */
  export interface CardsGetByCodeByNumberParams {
    number: number;
    code: string;
  }
}

export { CardsService }
