import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarksComponent } from './student-marks.component';

describe('StudentMarksComponent', () => {
  let component: StudentMarksComponent;
  let fixture: ComponentFixture<StudentMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMarksComponent]
    });
    fixture = TestBed.createComponent(StudentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
