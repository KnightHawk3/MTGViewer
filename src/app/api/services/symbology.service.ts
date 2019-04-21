/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CardSymbolList } from '../models/card_symbol_list';
import { Error } from '../models/error';
import { ManaCost } from '../models/mana_cost';
@Injectable({
  providedIn: 'root',
})
class SymbologyService extends __BaseService {
  static readonly SymbologyGetAllPath = '/symbology';
  static readonly SymbologyParseManaPath = '/symbology/parse-mana';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  SymbologyGetAllResponse(): __Observable<__StrictHttpResponse<CardSymbolList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/symbology`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CardSymbolList>;
      })
    );
  }
  /**
   * @return Success
   */
  SymbologyGetAll(): __Observable<CardSymbolList> {
    return this.SymbologyGetAllResponse().pipe(
      __map(_r => _r.body as CardSymbolList)
    );
  }

  /**
   * @param cost undefined
   * @return Success
   */
  SymbologyParseManaResponse(cost: string): __Observable<__StrictHttpResponse<ManaCost>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (cost != null) __params = __params.set('cost', cost.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/symbology/parse-mana`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ManaCost>;
      })
    );
  }
  /**
   * @param cost undefined
   * @return Success
   */
  SymbologyParseMana(cost: string): __Observable<ManaCost> {
    return this.SymbologyParseManaResponse(cost).pipe(
      __map(_r => _r.body as ManaCost)
    );
  }
}

module SymbologyService {
}

export { SymbologyService }
