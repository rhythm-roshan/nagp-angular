import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsComponent } from './latest-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestNewsService } from 'src/app/core/services/latest-news/latest-news.service';
import { ILatestNews } from 'src/app/infrastructure/interfaces/ilatest-news';
import { of } from 'rxjs';

describe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;
  let service: LatestNewsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsComponent ],
      imports: [HttpClientTestingModule, FormsModule,ReactiveFormsModule],
      providers:[LatestNewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(LatestNewsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call getLatestNews and return list of latest News", async(() => {
    const response: ILatestNews[] = [];  
    spyOn(service, 'getLatestNews').and.returnValue(of(response))  
    component.getNews();  
    fixture.detectChanges();  
    expect(component.latestNews).toEqual(response);
  }));
});
