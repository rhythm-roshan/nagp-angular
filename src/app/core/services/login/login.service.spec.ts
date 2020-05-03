import { TestBed } from '@angular/core/testing';
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
    service = TestBed.get(LoginService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch 1 user as an Observable`, 
  () => {

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
        expect(posts).toEqual(postItem);
      });

    let req = httpMock.expectOne(ApiMethodName.getUserData);
    expect(req.request.method).toBe("GET");

    req.flush(postItem);
      httpMock.verify();

  });


  it(`should fetch 2 user as an Observable`, 
    () => {

      const postItem = [
        {
          "id": 1,
          "username": "rhythm",
          "password": "rhythm"
        },
        {
          "id": 2,
          "username": "admin",
          "password": "admin"
        }
      ];

      service.getLatestUser()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
          expect(posts).toEqual(postItem);
        });

      let req = httpMock.expectOne(ApiMethodName.getUserData);
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
        httpMock.verify();
  
    });
});
