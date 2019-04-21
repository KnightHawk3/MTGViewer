/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RulingList } from '../models/ruling_list';
import { Error } from '../models/error';
@Injectable({
  providedIn: 'root',
})
class RulingsService extends __BaseService {
  static readonly RulingsGetByMultiverseIdPath = '/cards/multiverse/{id}/rulings';
  static readonly RulingsGetByMtgoIdPath = '/cards/mtgo/{id}/rulings';
  static readonly RulingsGetByCodeByNumberIdPath = '/cards/{code}/{number}/rulings';
  static readonly RulingsGetByIdPath = '/cards/{id}/rulings';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   * @return Success
   */
  RulingsGetByMultiverseIdResponse(id: number): __Observable<__StrictHttpResponse<RulingList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/multiverse/${id}/rulings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RulingList>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  RulingsGetByMultiverseId(id: number): __Observable<RulingList> {
    return this.RulingsGetByMultiverseIdResponse(id).pipe(
      __map(_r => _r.body as RulingList)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  RulingsGetByMtgoIdResponse(id: number): __Observable<__StrictHttpResponse<RulingList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/mtgo/${id}/rulings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RulingList>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  RulingsGetByMtgoId(id: number): __Observable<RulingList> {
    return this.RulingsGetByMtgoIdResponse(id).pipe(
      __map(_r => _r.body as RulingList)
    );
  }

  /**
   * @param params The `RulingsService.RulingsGetByCodeByNumberIdParams` containing the following parameters:
   *
   * - `number`:
   *
   * - `code`:
   *
   * @return Success
   */
  RulingsGetByCodeByNumberIdResponse(params: RulingsService.RulingsGetByCodeByNumberIdParams): __Observable<__StrictHttpResponse<RulingList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/${params.code}/${params.number}/rulings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RulingList>;
      })
    );
  }
  /**
   * @param params The `RulingsService.RulingsGetByCodeByNumberIdParams` containing the following parameters:
   *
   * - `number`:
   *
   * - `code`:
   *
   * @return Success
   */
  RulingsGetByCodeByNumberId(params: RulingsService.RulingsGetByCodeByNumberIdParams): __Observable<RulingList> {
    return this.RulingsGetByCodeByNumberIdResponse(params).pipe(
      __map(_r => _r.body as RulingList)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  RulingsGetByIdResponse(id: string): __Observable<__StrictHttpResponse<RulingList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cards/${id}/rulings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RulingList>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  RulingsGetById(id: string): __Observable<RulingList> {
    return this.RulingsGetByIdResponse(id).pipe(
      __map(_r => _r.body as RulingList)
    );
  }
}

module RulingsService {

  /**
   * Parameters for RulingsGetByCodeByNumberId
   */
  export interface RulingsGetByCodeByNumberIdParams {
    number: number;
    code: string;
  }
}

export { RulingsService }
