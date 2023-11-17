import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateStudentComponent } from './admin-update-student.component';

describe('AdminUpdateStudentComponent', () => {
  let component: AdminUpdateStudentComponent;
  let fixture: ComponentFixture<AdminUpdateStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateStudentComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
