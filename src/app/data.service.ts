import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    getCountry(){
    return this.http.get("https://restcountries.eu/rest/v2/all")
  }
  getUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getColor(){
    return this.http.get("https://reqres.in/api/unknown")
  }
}
