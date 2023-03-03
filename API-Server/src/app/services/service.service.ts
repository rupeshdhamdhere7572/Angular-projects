import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }
  apiData: any
  ngOnInit() {
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-04&sortBy=publishedAt&apiKey=00f6da9bf20241c282006c8d61f3dd88"
    this.http.get(url).subscribe(result => {
      console.log(result);
    })
  }
}
