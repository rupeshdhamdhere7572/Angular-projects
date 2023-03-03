import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private data: NewsServiceService) { }
  resultdata: any;
  newsData: any;


  ngOnInit(): void {
  }
  getnews() {
    this.data.getNewsData().subscribe((res) => {
      this.resultdata = res;
      this.newsData = this.resultdata.articles;
      console.log(this.newsData);
    });
    getv(info: any){
      this.data.getVideos(info).subscribe(res => {

this.videoData=res      }
  }

}
