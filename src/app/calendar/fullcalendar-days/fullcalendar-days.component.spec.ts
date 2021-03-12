import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarDaysComponent } from './fullcalendar-days.component';

describe('FullcalendarDaysComponent', () => {
  let component: FullcalendarDaysComponent;
  let fixture: ComponentFixture<FullcalendarDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalendarDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendarDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
