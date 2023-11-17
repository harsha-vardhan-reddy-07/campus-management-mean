import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateFacultyComponent } from './admin-update-faculty.component';

describe('AdminUpdateFacultyComponent', () => {
  let component: AdminUpdateFacultyComponent;
  let fixture: ComponentFixture<AdminUpdateFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateFacultyComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
