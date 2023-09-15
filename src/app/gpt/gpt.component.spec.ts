import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GptComponent } from './gpt.component';

describe('GptComponent', () => {
  let component: GptComponent;
  let fixture: ComponentFixture<GptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
