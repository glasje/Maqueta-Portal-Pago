import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
private host: string = '';
  private apiValue: string = '';
  private headerPost: any;
  private headerGet: any;
  constructor(private httpClient: HttpClient) {
    this.headerPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
    this.headerGet = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "get" });
  }
  
  Datos(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
const apiMethod = {
  metodo1: 'metodo1'
}