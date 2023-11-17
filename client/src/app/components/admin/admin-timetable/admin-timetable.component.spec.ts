import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimetableComponent } from './admin-timetable.component';

describe('AdminTimetableComponent', () => {
  let component: AdminTimetableComponent;
  let fixture: ComponentFixture<AdminTimetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTimetableComponent]
    });
    fixture = TestBed.createComponent(AdminTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
