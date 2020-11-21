import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private http : HttpClient ) { }

  public getdata(){
    let url = 'https://hpb.health.gov.lk/api/get-current-statistical';
    return this.http.get(url);
  }

}
