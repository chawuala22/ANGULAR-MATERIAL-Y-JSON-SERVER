import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient : HttpClient) { }

  postProduct(data : any){
    return this.httpclient.post<any>("http://localhost:3000/products/", data)
  }

  getProduct(){
    return this.httpclient.get<any>("http://localhost:3000/products/")
  }
}
