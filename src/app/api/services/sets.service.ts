/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SetList } from '../models/set_list';
import { Error } from '../models/error';
import { Set } from '../models/set';
@Injectable({
  providedIn: 'root',
})
class SetsService extends __BaseService {
  static readonly SetsGetAllPath = '/sets';
  static readonly SetsGetByCodePath = '/sets/{code}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  SetsGetAllResponse(): __Observable<__StrictHttpResponse<SetList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SetList>;
      })
    );
  }
  /**
   * @return Success
   */
  SetsGetAll(): __Observable<SetList> {
    return this.SetsGetAllResponse().pipe(
      __map(_r => _r.body as SetList)
    );
  }

  /**
   * @param code undefined
   * @return Success
   */
  SetsGetByCodeResponse(code: string): __Observable<__StrictHttpResponse<Set>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sets/${code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Set>;
      })
    );
  }
  /**
   * @param code undefined
   * @return Success
   */
  SetsGetByCode(code: string): __Observable<Set> {
    return this.SetsGetByCodeResponse(code).pipe(
      __map(_r => _r.body as Set)
    );
  }
}

module SetsService {
}

export { SetsService }
