import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceGlobalService {
  redirectUrl = '';
  baseUrl = 'https://tools.texoit.com/backend-java/api/movies';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public movieInfo(page: number, size: number, winner: boolean, year: number) {
    let params = new HttpParams()
      .append('page', page)
      .append('size', size)
      .append('winner', winner)
      .append('year', year);
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
