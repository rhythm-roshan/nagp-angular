import { TestBed, async, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
  });

  service = TestBed.get(LoginService);
  httpMock = TestBed.get(HttpTestingController);

  it(`should fetch 1 user as an Observable`, async(inject([HttpTestingController, LoginService],
    (httpClient: HttpTestingController, service: LoginService) => {

      const postItem = [
        {
          "id": 1,
          "username": "rhythm",
          "password": "rhythm"
        }
      ];

      service.getLatestUser()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(1);
        });

      let req = httpMock.expectOne(ApiMethodName.getUserData);
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));
});
