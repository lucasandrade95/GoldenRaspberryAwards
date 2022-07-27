import { Component, OnInit } from '@angular/core';
import {ServiceGlobalService} from "../service/service-global.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  moviePerYears: any;
  searchYear!: number;
  validateWinner: undefined;
  allMoviesYears: any
  totalList = 206;
  page = 0;

  constructor(
    private dataService: ServiceGlobalService
  ) { }

  ngOnInit(): void {
    this.moviesInfo(0, 206)
  }

  moviesInfo(page: number, size: number, year?: number | string, winner?:boolean) {
    page = 0;
    size = 206;
    if (year === '') {
      year = undefined;
    }
    // @ts-ignore
    if (winner === '') {
      winner = undefined;
    }
    if (year && winner === undefined) {
      this.dataService.movieInfo(page, size, year)
        .subscribe((result) => {
          this.totalList = result.content.length;
          this.allMoviesYears = result.content;
        });
    } else if (winner !== undefined && year === undefined) {
      this.dataService.movieInfo(page, size, undefined, winner)
        .subscribe((result) => {
          this.totalList = result.content.length;
          this.allMoviesYears = result.content;
        });
    } else if (winner && year) {
      this.dataService.movieInfo(page, size, year, winner)
        .subscribe((result) => {
          this.totalList = result.content.length;
          this.allMoviesYears = result.content;
        });
    } else {
      this.dataService.movieInfo(page, size)
        .subscribe((result) => {
          this.totalList = result.content.length;
          this.allMoviesYears = result.content;
        });
    }

  }
}
