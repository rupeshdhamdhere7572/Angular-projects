import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  getVideos(info: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  apiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2022-11-07&sortBy=publishedAt&apiKey=00f6da9bf20241c282006c8d61f3dd88"
  apiUrl = "https=00f6da9bf20241c282006c8d61f3dd88"
  getNewsData() {
    return this.http.get(this.apiUrl);
  }
}
