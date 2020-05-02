import { TestBed } from '@angular/core/testing';

import { LatestNewsService } from './latest-news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LatestNewsService', () => {
  let service: LatestNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LatestNewsService]
    });
    service = TestBed.inject(LatestNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
