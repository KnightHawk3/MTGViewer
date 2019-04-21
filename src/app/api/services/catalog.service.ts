/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Catalog } from '../models/catalog';
import { Error } from '../models/error';
@Injectable({
  providedIn: 'root',
})
class CatalogService extends __BaseService {
  static readonly CatalogGetCardNamesPath = '/catalog/card-names';
  static readonly CatalogGetWordBankPath = '/catalog/word-bank';
  static readonly CatalogGetCreatureTypesPath = '/catalog/creature-types';
  static readonly CatalogGetPlaneswalkerTypesPath = '/catalog/planeswalker-types';
  static readonly CatalogGetLandTypesPath = '/catalog/land-types';
  static readonly CatalogGetArtifactTypesPath = '/catalog/artifact-types';
  static readonly CatalogGetEnchantmentTypesPath = '/catalog/enchantment-types';
  static readonly CatalogGetSpellTypesPath = '/catalog/spell-types';
  static readonly CatalogGetPowersPath = '/catalog/powers';
  static readonly CatalogGetToughnessesPath = '/catalog/thoughnesses';
  static readonly CatalogGetLoyaltiesPath = '/catalog/loyalties';
  static readonly CatalogGetWatermarksPath = '/catalog/watermarks';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  CatalogGetCardNamesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/card-names`,
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
   * @return Success
   */
  CatalogGetCardNames(): __Observable<Catalog> {
    return this.CatalogGetCardNamesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetWordBankResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/word-bank`,
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
   * @return Success
   */
  CatalogGetWordBank(): __Observable<Catalog> {
    return this.CatalogGetWordBankResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetCreatureTypesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/creature-types`,
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
   * @return Success
   */
  CatalogGetCreatureTypes(): __Observable<Catalog> {
    return this.CatalogGetCreatureTypesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetPlaneswalkerTypesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/planeswalker-types`,
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
   * @return Success
   */
  CatalogGetPlaneswalkerTypes(): __Observable<Catalog> {
    return this.CatalogGetPlaneswalkerTypesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetLandTypesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/land-types`,
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
   * @return Success
   */
  CatalogGetLandTypes(): __Observable<Catalog> {
    return this.CatalogGetLandTypesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetArtifactTypesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/artifact-types`,
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
   * @return Success
   */
  CatalogGetArtifactTypes(): __Observable<Catalog> {
    return this.CatalogGetArtifactTypesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetEnchantmentTypesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/enchantment-types`,
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
   * @return Success
   */
  CatalogGetEnchantmentTypes(): __Observable<Catalog> {
    return this.CatalogGetEnchantmentTypesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetSpellTypesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/spell-types`,
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
   * @return Success
   */
  CatalogGetSpellTypes(): __Observable<Catalog> {
    return this.CatalogGetSpellTypesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetPowersResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/powers`,
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
   * @return Success
   */
  CatalogGetPowers(): __Observable<Catalog> {
    return this.CatalogGetPowersResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetToughnessesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/thoughnesses`,
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
   * @return Success
   */
  CatalogGetToughnesses(): __Observable<Catalog> {
    return this.CatalogGetToughnessesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetLoyaltiesResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/loyalties`,
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
   * @return Success
   */
  CatalogGetLoyalties(): __Observable<Catalog> {
    return this.CatalogGetLoyaltiesResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * @return Success
   */
  CatalogGetWatermarksResponse(): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/catalog/watermarks`,
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
   * @return Success
   */
  CatalogGetWatermarks(): __Observable<Catalog> {
    return this.CatalogGetWatermarksResponse().pipe(
      __map(_r => _r.body as Catalog)
    );
  }
}

module CatalogService {
}

export { CatalogService }
