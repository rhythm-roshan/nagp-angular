import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PrecautionDataService } from './precaution-data.service';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';

describe('PrecautionDataService', () => {
  let service: PrecautionDataService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PrecautionDataService
      ],
    });

    service = TestBed.get(PrecautionDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch 1 precaution as an Observable`, async(inject([HttpTestingController, PrecautionDataService],
    (httpClient: HttpTestingController, service: PrecautionDataService) => {

      const postItem = [
        {
          "message": "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
        }
      ];


      service.getPrecautions()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(1);
        });

      let req = httpMock.expectOne(ApiMethodName.getPrecautionData);
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));

    it(`should fetch 2 precaution as an Observable`, async(inject([HttpTestingController, PrecautionDataService],
      (httpClient: HttpTestingController, service: PrecautionDataService) => {
  
        const postItem = [
          {
            "message": "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
          },
          {
            "message": "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
          },
        ];
  
  
        service.getPrecautions()
          .subscribe((posts: any) => {
            expect(posts.length).toBe(2);
          });
  
        let req = httpMock.expectOne(ApiMethodName.getPrecautionData);
        expect(req.request.method).toBe("GET");
  
        req.flush(postItem);
        httpMock.verify();
  
      })));
});
