import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNavComponent } from './faculty-nav.component';

describe('FacultyNavComponent', () => {
  let component: FacultyNavComponent;
  let fixture: ComponentFixture<FacultyNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyNavComponent]
    });
    fixture = TestBed.createComponent(FacultyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
