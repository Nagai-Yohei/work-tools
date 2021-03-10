import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit, OnChanges {
  nextYear: number = 2000;
  nextMonth: number = 2;

  constructor() { }

  ngOnInit(): void {
    this.onClickToday();
  }

  ngOnChanges(): void {
    if (this.month > 12) {
      this.year++;
      this.month = 1;
    } else if (this.month < 1) {
      this.year--;
      this.month = 12;
    }
    
    if (this.month === 12) {
      this.nextYear = this.year + 1;
      this.nextMonth = 1;
    } else {
      this.nextYear = this.year;
      this.nextMonth = this.month + 1;
    }
  }

  onClickLastMonth(): void {
    this.month--;
    this.ngOnChanges();
  }

  onClickNextMonth(): void {
    this.month++;
    this.ngOnChanges();
  }

  onClickToday(): void {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.ngOnChanges();
  }

  @Input() year: number = 2000;
  @Input() month: number = 1;
}
