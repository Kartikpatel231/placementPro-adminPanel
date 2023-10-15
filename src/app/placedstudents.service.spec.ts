import { TestBed } from '@angular/core/testing';

import { PlacedstudentsService } from './placedstudents.service';

describe('PlacedstudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacedstudentsService = TestBed.get(PlacedstudentsService);
    expect(service).toBeTruthy();
  });
});
