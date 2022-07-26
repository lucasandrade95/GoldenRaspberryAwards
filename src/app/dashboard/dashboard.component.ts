import { Component, OnInit } from '@angular/core';
import {ServiceGlobalService} from "../service/service-global.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  moreThanOneWinner: any;
  studiosCount: any;
  maxProducer: any;
  minProducer: any;
  moviePerYears: any;

  searchYear!: number;
  constructor(
    private dataService: ServiceGlobalService,
  ) {}

  ngOnInit(): void {
    this.yearWithMoreThanOneWinners();
    this.studiosFirsts();
    this.prizeRange();
  }

  yearWithMoreThanOneWinners() {
    this.dataService.yearWithMoreThanOneWinner('years-with-multiple-winners').subscribe((result) => {
        this.moreThanOneWinner = result.years;
    });
  }

  studiosFirsts() {
    this.dataService.studio('studios-with-win-count').subscribe((result) => {
      this.studiosCount = result.studios.slice(0,3);
    });
  }

  prizeRange() {
    this.dataService.prizeRange('max-min-win-interval-for-producers').subscribe((result) => {

      this.maxProducer = result.max;
      this.minProducer = result.min;
    });
  }

  moviePerYear(year: number) {
    this.dataService.moviePerYear(true, year ? year: 2019)
      .subscribe((result) => {
      this.moviePerYears = result;
    });
  }

}
