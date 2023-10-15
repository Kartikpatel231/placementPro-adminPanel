import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedStudentUpdateComponent } from './placed-student-update.component';

describe('PlacedStudentUpdateComponent', () => {
  let component: PlacedStudentUpdateComponent;
  let fixture: ComponentFixture<PlacedStudentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedStudentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedStudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
