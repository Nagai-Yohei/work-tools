import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDaysEventsComponent } from './calendar-days-events.component';

describe('CalendarDaysEventsComponent', () => {
  let component: CalendarDaysEventsComponent;
  let fixture: ComponentFixture<CalendarDaysEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDaysEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDaysEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
