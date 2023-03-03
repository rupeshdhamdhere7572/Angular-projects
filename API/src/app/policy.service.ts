import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  SERVER_URL: string = "http://localhost:4200/api/";

  constructor(private httpclient: HttpClient) { }
  public getpolicies() {
    return this.httpclient.get( this.SERVER_URL + 'policies')
  }
  public getpolicy(policyId:any):Observable<policy> {
    return this.httpclient.get(`${this.SERVER_URL + 'policies'}/${policyId}`);
  }
  public createPolicy(data:any):Observable<any>{
    return this.httpclient.post(`${this.SERVER_URL+ 'policies'}`, data);
  }
  public deletePolicy(policyId:any) {
    return this.httpclient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`);
    }

    public updatePolicy(policy:{id:number,num:'string',amount:number,userId:number,clientId:number,description:'string'}) {
    return this.httpclient.put(`${ this.SERVER_URL + 'policies'}/${policy.id}`,policy);
     }
}
