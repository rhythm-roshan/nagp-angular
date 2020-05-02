import { TestBed } from '@angular/core/testing';

import { Covid19DataService } from './covid19-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Covid19DataService', () => {
  let service: Covid19DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Covid19DataService]
    });
    service = TestBed.inject(Covid19DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
