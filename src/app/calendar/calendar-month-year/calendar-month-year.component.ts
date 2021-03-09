import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-month-year',
  templateUrl: './calendar-month-year.component.html',
  styleUrls: ['./calendar-month-year.component.css']
})
export class CalendarMonthYearComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input() year: number = 2000;
  @Input() month: number = 1;
}
