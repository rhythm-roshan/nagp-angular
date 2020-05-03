import { TestBed, async, inject } from '@angular/core/testing';

import { Covid19DataService } from './covid19-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';

describe('Covid19DataService', () => {
  let service: Covid19DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Covid19DataService]
    });
    service = TestBed.get(Covid19DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch 1 district record `, async(inject([HttpTestingController, Covid19DataService],
    (httpClient: HttpTestingController, service: Covid19DataService) => {

      const postItem = [
        {
          "state": "Ladakh",
          "statecode": "LA",
          "districtData": [
            {
              "district": "Kargil",
              "notes": "",
              "active": 5,
              "confirmed": 9,
              "deceased": 0,
              "recovered": 4,
              "delta": {
                "confirmed": 1,
                "deceased": 0,
                "recovered": 0
              }
            },
            {
              "district": "Leh",
              "notes": "",
              "active": 20,
              "confirmed": 33,
              "deceased": 0,
              "recovered": 13,
              "delta": {
                "confirmed": 18,
                "deceased": 0,
                "recovered": 0
              }
            }]
        }
      ];


      service.getDistrictData().then((posts: any) => {
        expect(posts.length).toBe(1);
      });

      let req = httpMock.expectOne(ApiMethodName.getDistricteWiseData);
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));


it(`should fetch 2 district record `, async(inject([HttpTestingController, Covid19DataService],
  (httpClient: HttpTestingController, service: Covid19DataService) => {

    const postItem = [
      {
        "state": "Ladakh",
        "statecode": "LA",
        "districtData": [
          {
            "district": "Kargil",
            "notes": "",
            "active": 5,
            "confirmed": 9,
            "deceased": 0,
            "recovered": 4,
            "delta": {
              "confirmed": 1,
              "deceased": 0,
              "recovered": 0
            }
          },
          {
            "district": "Leh",
            "notes": "",
            "active": 20,
            "confirmed": 33,
            "deceased": 0,
            "recovered": 13,
            "delta": {
              "confirmed": 18,
              "deceased": 0,
              "recovered": 0
            }
          }]
      }, {
        "state": "Ladakh",
        "statecode": "LA",
        "districtData": [
          {
            "district": "Kargil",
            "notes": "",
            "active": 5,
            "confirmed": 9,
            "deceased": 0,
            "recovered": 4,
            "delta": {
              "confirmed": 1,
              "deceased": 0,
              "recovered": 0
            }
          },
          {
            "district": "Leh",
            "notes": "",
            "active": 20,
            "confirmed": 33,
            "deceased": 0,
            "recovered": 13,
            "delta": {
              "confirmed": 18,
              "deceased": 0,
              "recovered": 0
            }
          }]
      }
    ];


    service.getDistrictData().then((posts: any) => {
      expect(posts.length).toBe(2);
    });

    let req = httpMock.expectOne(ApiMethodName.getDistricteWiseData);
    expect(req.request.method).toBe("GET");

    req.flush(postItem);
    httpMock.verify();

  })));

});
