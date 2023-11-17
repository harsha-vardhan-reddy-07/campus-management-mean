import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStudentComponent } from './admin-add-student.component';

describe('AdminAddStudentComponent', () => {
  let component: AdminAddStudentComponent;
  let fixture: ComponentFixture<AdminAddStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddStudentComponent]
    });
    fixture = TestBed.createComponent(AdminAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
