import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-Server';
  constructor(private http:HttpClient) { }
  apiData: any;
  newsdata: any;

  ngOnInit()
  {
    const Apiurl = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-04&sortBy=publishedAt&apiKey=00f6da9bf20241c282006c8d61f3dd88";
      this.http.get(Apiurl).subscribe(result=>{
      console.log(this.apiData)
      this.apiData = result;
      this.newsdata = this.apiData.articles;
    })
  }
}

