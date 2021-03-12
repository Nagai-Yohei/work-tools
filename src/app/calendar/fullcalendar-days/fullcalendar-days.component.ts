import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-fullcalendar-days',
  templateUrl: './fullcalendar-days.component.html',
  styleUrls: ['./fullcalendar-days.component.css']
})

export class FullcalendarDaysComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      {title:'event 1', date:'2021-3-13'},
      {title:'event 2', date:'2021-3-30'}
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
