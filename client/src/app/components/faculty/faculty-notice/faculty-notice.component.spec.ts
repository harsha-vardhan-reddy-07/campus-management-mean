import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNoticeComponent } from './faculty-notice.component';

describe('FacultyNoticeComponent', () => {
  let component: FacultyNoticeComponent;
  let fixture: ComponentFixture<FacultyNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyNoticeComponent]
    });
    fixture = TestBed.createComponent(FacultyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
