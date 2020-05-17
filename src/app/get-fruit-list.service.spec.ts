import { TestBed } from '@angular/core/testing';

import { GetFruitListService } from './get-fruit-list.service';

describe('GetFruitListService', () => {
  let service: GetFruitListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFruitListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
