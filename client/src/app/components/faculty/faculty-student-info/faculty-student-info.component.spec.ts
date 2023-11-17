import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyStudentInfoComponent } from './faculty-student-info.component';

describe('FacultyStudentInfoComponent', () => {
  let component: FacultyStudentInfoComponent;
  let fixture: ComponentFixture<FacultyStudentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyStudentInfoComponent]
    });
    fixture = TestBed.createComponent(FacultyStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
