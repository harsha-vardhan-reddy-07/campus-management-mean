import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTimetableComponent } from './faculty-timetable.component';

describe('FacultyTimetableComponent', () => {
  let component: FacultyTimetableComponent;
  let fixture: ComponentFixture<FacultyTimetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyTimetableComponent]
    });
    fixture = TestBed.createComponent(FacultyTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
