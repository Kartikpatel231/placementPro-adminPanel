import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDetailsListComponent } from './university-details-list.component';

describe('UniversityDetailsListComponent', () => {
  let component: UniversityDetailsListComponent;
  let fixture: ComponentFixture<UniversityDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
