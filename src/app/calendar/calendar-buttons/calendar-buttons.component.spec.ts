import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarButtonsComponent } from './calendar-buttons.component';

describe('CalendarButtonsComponent', () => {
  let component: CalendarButtonsComponent;
  let fixture: ComponentFixture<CalendarButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
