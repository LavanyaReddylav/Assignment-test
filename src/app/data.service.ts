import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private _http:HttpClient) { }

getUsers(){
 return  this._http.get<any>(`https://jsonplaceholder.typicode.com/users`).pipe(map(res=>res))
}

getUsersData(){
  return  this._http.get<any>(`https://jsonplaceholder.typicode.com/posts`).pipe(map(res=>res))
 }
}
