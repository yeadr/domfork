import { TestBed } from '@angular/core/testing';

import { Divs } from './divs';

describe('Divs', () => {
  let service: Divs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Divs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
