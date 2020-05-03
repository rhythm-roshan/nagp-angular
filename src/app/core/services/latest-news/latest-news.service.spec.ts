import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiMethodName } from 'src/app/infrastructure/enums/api-method-name.enum';
import { LatestNewsService } from './latest-news.service';
import { ILatestNews } from 'src/app/infrastructure/interfaces/ilatest-news';

describe('LatestNewsService', () => {
  let service: LatestNewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LatestNewsService]
    });
    service = TestBed.get(LatestNewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch 3 latest news as an Observable`, async(inject([HttpTestingController, LatestNewsService],
    (httpClient: HttpTestingController, service: LatestNewsService) => {

      const postItem = [
        {
          "id": "1",
          "title": "81 coronavirus patients recover in Gautam Buddha Nagar, active cases now 56",
          "description": "Recover in Gautam Buddha Nagar",
          "summary": "Gautam Buddha Nagar District Magistrate Suhas LY has tweeted that 91 coronavirus results came out in the district today, out of which 88 tested negative, while three tested positive. The total number of cured patients has risen to 81, he added, while the total number of active cases is 56. Fight goes on with extreme caution, he added.",
          "fullnews": "https://twitter.com/dmgbnagar/status/1255458660127563776?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
          "imageURL": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/05_may/1_fri/img_1588348386438_394.jpg"
        },
        {
          "id": "2",
          "title": "Coronavirus cases reach 2,438 in Rajasthan; 814 patients recover",
          "description": "Coronavirus cases reach 2,438 in Rajasthan",
          "summary": "Rajasthan on Wednesday reported 74 new coronavirus cases, taking the total number of cases in the state to 2,438. All three deaths reported in the state today were from Jaipur, taking the death toll to 55. Notably, 814 patients have recovered in the state and 592 were discharged. Jaipur is the worst-hit district with 878 cases and 30 deaths.",
          "fullnews": "http://www.rajswasthya.nic.in/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
          "imageURL": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/05_may/1_fri/img_1588349003673_937.jpg"
        },
        {
          "title": "1,008 coronavirus cases reported in Maharashtra in biggest single-day jump",
          "description": " coronavirus cases reported in Maharashtra",
          "summary": "As many as 1,008 people were tested positive for coronavirus in Maharashtra in the last 24 hours, marking the biggest daily jump in the number of cases in the state so far. With this, the total number of coronavirus cases in the state rose to 11,506. Further, 26 coronavirus patients died in Maharashtra in the last 24 hours.",
          "fullnews": "https://twitter.com/airnewsalerts/status/1256275863726723074?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
          "imageURL": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/05_may/1_fri/img_1588355053265_10.jpg?",
          "id": "y_pGUoV"
        }
      ];


      service.getLatestNews()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      let req = httpMock.expectOne(ApiMethodName.getNewsData);
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));


    it('should post the correct data', () => {

      let postItem: ILatestNews = <ILatestNews>{};
      
      postItem.description = 'test';
      postItem.title = 'test';
      postItem.summary = 'test';
      postItem.fullNews = 'test';
      postItem.imageURL = 'test';

      service.addLatestNews(postItem).subscribe((data: any) => {
          expect(data).toBe(postItem);
        });
    
        let req = httpMock.expectOne(ApiMethodName.getNewsData);
        expect(req.request.method).toBe("POST");
  
        req.flush(postItem);
        httpMock.verify();

});

});
