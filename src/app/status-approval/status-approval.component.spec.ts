import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusApprovalComponent } from './status-approval.component';

describe('StatusApprovalComponent', () => {
  let component: StatusApprovalComponent;
  let fixture: ComponentFixture<StatusApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
