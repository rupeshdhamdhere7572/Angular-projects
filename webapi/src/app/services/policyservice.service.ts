import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PolicyserviceService {
  server_url: string = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) {}
  public getPolicyData() {
    return this.http.get(this.server_url + 'policies');
  }
  public getId(id: any) {
    return this.http.get(`${this.server_url}/${id}`);
  }
  public createpolicy(data: any) {
    this.http.post(this.server_url + 'policies', data);
  }
  this.pservice.createpolicy(data).subscribe((data:any)=> {
}
