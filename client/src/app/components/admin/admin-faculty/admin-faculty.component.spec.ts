import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacultyComponent } from './admin-faculty.component';

describe('AdminFacultyComponent', () => {
  let component: AdminFacultyComponent;
  let fixture: ComponentFixture<AdminFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFacultyComponent]
    });
    fixture = TestBed.createComponent(AdminFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
