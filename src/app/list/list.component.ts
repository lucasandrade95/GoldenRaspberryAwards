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
  validateWinner = true;

  constructor(private dataService: ServiceGlobalService,) { }

  ngOnInit(): void {
    this.moviePerYear(2019);
  }

  moviePerYear(year: number) {
    this.dataService.moviePerYear(this.validateWinner, year ? year: 2019)
      .subscribe((result) => {
        this.moviePerYears = result;
      });
  }
}
