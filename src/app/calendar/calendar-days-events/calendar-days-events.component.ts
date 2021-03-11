import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-calendar-days-events',
  templateUrl: './calendar-days-events.component.html',
  styleUrls: ['./calendar-days-events.component.css']
})
export class CalendarDaysEventsComponent implements OnInit {
  tiles: Tile[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
    this.tiles.push({text: 'One', cols:1, rows:1, color:'lightblue'});
  }

}
