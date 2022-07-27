import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceGlobalService {
  redirectUrl = '';
  baseUrl = 'https://tools.texoit.com/backend-java/api/movies';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public movieInfo(page: number, size: number, year?: number | string, winner?: boolean) {
    let params: any;
    if (year && winner === undefined) {
      params = new HttpParams()
        .append('page', page)
        .append('size', size)
        .append('year', year);
    } else if (winner && year === undefined) {
      params = new HttpParams()
        .append('page', page)
        .append('size', size)
        .append('winner', winner);
    } else if (year && winner) {
      params = new HttpParams()
        .append('page', page)
        .append('size', size)
        .append('year', year)
        .append('winner', winner);
    } else {
      params = new HttpParams()
        .append('page', page)
        .append('size', size)
    }
    return this.httpClient.get<any>(this.baseUrl, {params});
  }

  public yearWithMoreThanOneWinner(projection: string) {
    let params = new HttpParams()
      .append('projection', projection)
    return this.httpClient.get<any>(this.baseUrl, {params});
  }

  public studio(projection: string) {
    let params = new HttpParams()
      .append('projection', projection)
    return this.httpClient.get<any>(this.baseUrl, {params});
  }

  public prizeRange(projection: string) {
    let params = new HttpParams()
      .append('projection', projection)
    return this.httpClient.get<any>(this.baseUrl, {params});
  }

  public moviePerYear(winner: boolean, year: number) {
    let params = new HttpParams()
      .append('winner', winner)
      .append('year', year)
    return this.httpClient.get<any>(this.baseUrl, {params});
  }

}
