import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthYearComponent } from './calendar-month-year.component';

describe('CalendarMonthYearComponent', () => {
  let component: CalendarMonthYearComponent;
  let fixture: ComponentFixture<CalendarMonthYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMonthYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
