import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
