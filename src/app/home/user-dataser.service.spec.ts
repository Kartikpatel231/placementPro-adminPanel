import { TestBed } from '@angular/core/testing';

import { UserDataserService } from './user-dataser.service';

describe('UserDataserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataserService = TestBed.get(UserDataserService);
    expect(service).toBeTruthy();
  });
});
