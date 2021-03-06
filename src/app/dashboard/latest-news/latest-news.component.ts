import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from 'src/app/core/services/latest-news/latest-news.service';
import { ILatestNews } from 'src/app/infrastructure/interfaces/ilatest-news';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  constructor(private dataservice: LatestNewsService) { }
  latestNews: ILatestNews[];

  ngOnInit(): void {
   this.getNews();
  }

  getNews(){
    this.dataservice.getLatestNews().subscribe((data) => {
      console.log(data);
      this.latestNews = data;
    });
  }

}
