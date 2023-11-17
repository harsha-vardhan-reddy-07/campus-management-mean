import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddFacultyComponent } from './admin-add-faculty.component';

describe('AdminAddFacultyComponent', () => {
  let component: AdminAddFacultyComponent;
  let fixture: ComponentFixture<AdminAddFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddFacultyComponent]
    });
    fixture = TestBed.createComponent(AdminAddFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
